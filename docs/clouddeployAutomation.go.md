# `clouddeployAutomation` Submodule <a name="`clouddeployAutomation` Submodule" id="@cdktf/provider-google.clouddeployAutomation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddeployAutomation <a name="ClouddeployAutomation" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation google_clouddeploy_automation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomation(scope Construct, id *string, config ClouddeployAutomationConfig) ClouddeployAutomation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig">ClouddeployAutomationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig">ClouddeployAutomationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector">PutSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSelector` <a name="PutSelector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector"></a>

```go
func PutSelector(value ClouddeployAutomationSelector)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts"></a>

```go
func PutTimeouts(value ClouddeployAutomationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddeployAutomation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.ClouddeployAutomation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.ClouddeployAutomation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.ClouddeployAutomation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.ClouddeployAutomation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ClouddeployAutomation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ClouddeployAutomation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ClouddeployAutomation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ClouddeployAutomation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList">ClouddeployAutomationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference">ClouddeployAutomationSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference">ClouddeployAutomationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipelineInput">DeliveryPipelineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selectorInput">SelectorInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipeline">DeliveryPipeline</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rules"></a>

```go
func Rules() ClouddeployAutomationRulesList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList">ClouddeployAutomationRulesList</a>

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selector"></a>

```go
func Selector() ClouddeployAutomationSelectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference">ClouddeployAutomationSelectorOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeouts"></a>

```go
func Timeouts() ClouddeployAutomationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference">ClouddeployAutomationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeliveryPipelineInput`<sup>Optional</sup> <a name="DeliveryPipelineInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipelineInput"></a>

```go
func DeliveryPipelineInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `SelectorInput`<sup>Optional</sup> <a name="SelectorInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.selectorInput"></a>

```go
func SelectorInput() ClouddeployAutomationSelector
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeliveryPipeline`<sup>Required</sup> <a name="DeliveryPipeline" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.deliveryPipeline"></a>

```go
func DeliveryPipeline() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddeployAutomationConfig <a name="ClouddeployAutomationConfig" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeliveryPipeline: *string,
	Location: *string,
	Name: *string,
	Rules: interface{},
	Selector: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationSelector,
	ServiceAccount: *string,
	Annotations: *map[string]*string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Suspended: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.deliveryPipeline">DeliveryPipeline</a></code> | <code>*string</code> | The delivery_pipeline for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the 'Automation'. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.selector">Selector</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | selector block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.description">Description</a></code> | <code>*string</code> | Optional. Description of the 'Automation'. Max length is 255 characters. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.suspended">Suspended</a></code> | <code>interface{}</code> | Optional. When Suspended, automation is deactivated from execution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeliveryPipeline`<sup>Required</sup> <a name="DeliveryPipeline" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.deliveryPipeline"></a>

```go
DeliveryPipeline *string
```

- *Type:* *string

The delivery_pipeline for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#delivery_pipeline ClouddeployAutomation#delivery_pipeline}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#location ClouddeployAutomation#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the 'Automation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#name ClouddeployAutomation#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#rules ClouddeployAutomation#rules}

---

##### `Selector`<sup>Required</sup> <a name="Selector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.selector"></a>

```go
Selector ClouddeployAutomationSelector
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#selector ClouddeployAutomation#selector}

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Required. Email address of the user-managed IAM service account that creates Cloud Deploy release and rollout resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#service_account ClouddeployAutomation#service_account}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Optional.

User annotations. These attributes can only be set and used by the user, and not by Cloud Deploy. Annotations must meet the following constraints: * Annotations are key/value pairs. * Valid annotation keys have two segments: an optional prefix and name, separated by a slash ('/'). * The name segment is required and must be 63 characters or less, beginning and ending with an alphanumeric character ('[a-z0-9A-Z]') with dashes ('-'), underscores ('_'), dots ('.'), and alphanumerics between. * The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots('.'), not longer than 253 characters in total, followed by a slash ('/'). See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/#syntax-and-character-set for more details.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#annotations ClouddeployAutomation#annotations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Optional. Description of the 'Automation'. Max length is 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#description ClouddeployAutomation#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional.

Labels are attributes that can be set and used by both the user and by Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#labels ClouddeployAutomation#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#project ClouddeployAutomation#project}.

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

Optional. When Suspended, automation is deactivated from execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#suspended ClouddeployAutomation#suspended}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationConfig.property.timeouts"></a>

```go
Timeouts ClouddeployAutomationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts">ClouddeployAutomationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#timeouts ClouddeployAutomation#timeouts}

---

### ClouddeployAutomationRules <a name="ClouddeployAutomationRules" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRules {
	AdvanceRolloutRule: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule,
	PromoteReleaseRule: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule,
	RepairRolloutRule: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule,
	TimedPromoteReleaseRule: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.advanceRolloutRule">AdvanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | advance_rollout_rule block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.promoteReleaseRule">PromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | promote_release_rule block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.repairRolloutRule">RepairRolloutRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a></code> | repair_rollout_rule block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.timedPromoteReleaseRule">TimedPromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | timed_promote_release_rule block. |

---

##### `AdvanceRolloutRule`<sup>Optional</sup> <a name="AdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.advanceRolloutRule"></a>

```go
AdvanceRolloutRule ClouddeployAutomationRulesAdvanceRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

advance_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#advance_rollout_rule ClouddeployAutomation#advance_rollout_rule}

---

##### `PromoteReleaseRule`<sup>Optional</sup> <a name="PromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.promoteReleaseRule"></a>

```go
PromoteReleaseRule ClouddeployAutomationRulesPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#promote_release_rule ClouddeployAutomation#promote_release_rule}

---

##### `RepairRolloutRule`<sup>Optional</sup> <a name="RepairRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.repairRolloutRule"></a>

```go
RepairRolloutRule ClouddeployAutomationRulesRepairRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a>

repair_rollout_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#repair_rollout_rule ClouddeployAutomation#repair_rollout_rule}

---

##### `TimedPromoteReleaseRule`<sup>Optional</sup> <a name="TimedPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRules.property.timedPromoteReleaseRule"></a>

```go
TimedPromoteReleaseRule ClouddeployAutomationRulesTimedPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a>

timed_promote_release_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#timed_promote_release_rule ClouddeployAutomation#timed_promote_release_rule}

---

### ClouddeployAutomationRulesAdvanceRolloutRule <a name="ClouddeployAutomationRulesAdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRulesAdvanceRolloutRule {
	Id: *string,
	SourcePhases: *[]*string,
	Wait: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.id">Id</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases">SourcePhases</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.wait">Wait</a></code> | <code>*string</code> | Optional. How long to wait after a rollout is finished. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.id"></a>

```go
Id *string
```

- *Type:* *string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SourcePhases`<sup>Optional</sup> <a name="SourcePhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.sourcePhases"></a>

```go
SourcePhases *[]*string
```

- *Type:* *[]*string

Optional.

Proceeds only after phase name matched any one in the list. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: '^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#source_phases ClouddeployAutomation#source_phases}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule.property.wait"></a>

```go
Wait *string
```

- *Type:* *string

Optional. How long to wait after a rollout is finished.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationRulesPromoteReleaseRule <a name="ClouddeployAutomationRulesPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRulesPromoteReleaseRule {
	Id: *string,
	DestinationPhase: *string,
	DestinationTargetId: *string,
	Wait: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.id">Id</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase">DestinationPhase</a></code> | <code>*string</code> | Optional. The starting phase of the rollout created by this operation. Default to the first phase. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId">DestinationTargetId</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.wait">Wait</a></code> | <code>*string</code> | Optional. How long the release need to be paused until being promoted to the next target. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.id"></a>

```go
Id *string
```

- *Type:* *string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `DestinationPhase`<sup>Optional</sup> <a name="DestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationPhase"></a>

```go
DestinationPhase *string
```

- *Type:* *string

Optional. The starting phase of the rollout created by this operation. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

##### `DestinationTargetId`<sup>Optional</sup> <a name="DestinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.destinationTargetId"></a>

```go
DestinationTargetId *string
```

- *Type:* *string

Optional.

The ID of the stage in the pipeline to which this 'Release' is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine if the target is one of the stages in the promotion sequence defined in the pipeline. * "@next", the next target in the promotion sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#destination_target_id ClouddeployAutomation#destination_target_id}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule.property.wait"></a>

```go
Wait *string
```

- *Type:* *string

Optional. How long the release need to be paused until being promoted to the next target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationRulesRepairRolloutRule <a name="ClouddeployAutomationRulesRepairRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRulesRepairRolloutRule {
	Id: *string,
	Jobs: *[]*string,
	Phases: *[]*string,
	RepairPhases: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.id">Id</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.jobs">Jobs</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.phases">Phases</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.repairPhases">RepairPhases</a></code> | <code>interface{}</code> | repair_phases block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.id"></a>

```go
Id *string
```

- *Type:* *string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Jobs`<sup>Optional</sup> <a name="Jobs" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.jobs"></a>

```go
Jobs *[]*string
```

- *Type:* *[]*string

Optional.

Jobs to repair. Proceeds only after job name matched any one in the list, or for all jobs if unspecified or empty. The phase that includes the job must match the phase ID specified in sourcePhase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#jobs ClouddeployAutomation#jobs}

---

##### `Phases`<sup>Optional</sup> <a name="Phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.phases"></a>

```go
Phases *[]*string
```

- *Type:* *[]*string

Optional.

Phases within which jobs are subject to automatic repair actions on failure. Proceeds only after phase name matched any one in the list, or for all phases if unspecified. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: ^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#phases ClouddeployAutomation#phases}

---

##### `RepairPhases`<sup>Optional</sup> <a name="RepairPhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule.property.repairPhases"></a>

```go
RepairPhases interface{}
```

- *Type:* interface{}

repair_phases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#repair_phases ClouddeployAutomation#repair_phases}

---

### ClouddeployAutomationRulesRepairRolloutRuleRepairPhases <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases {
	Retry: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry,
	Rollback: github.com/cdktf/cdktf-provider-google-go/google/v14.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback">Rollback</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | rollback block. |

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.retry"></a>

```go
Retry ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

retry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#retry ClouddeployAutomation#retry}

---

##### `Rollback`<sup>Optional</sup> <a name="Rollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhases.property.rollback"></a>

```go
Rollback ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

rollback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#rollback ClouddeployAutomation#rollback}

---

### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry {
	Attempts: *string,
	BackoffMode: *string,
	Wait: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts">Attempts</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode">BackoffMode</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait">Wait</a></code> | <code>*string</code> | Optional. |

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.attempts"></a>

```go
Attempts *string
```

- *Type:* *string

Required.

Total number of retries. Retry is skipped if set to 0; The minimum value is 1, and the maximum value is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#attempts ClouddeployAutomation#attempts}

---

##### `BackoffMode`<sup>Optional</sup> <a name="BackoffMode" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.backoffMode"></a>

```go
BackoffMode *string
```

- *Type:* *string

Optional.

The pattern of how wait time will be increased. Default is linear. Backoff mode will be ignored if wait is 0. Possible values: ["BACKOFF_MODE_UNSPECIFIED", "BACKOFF_MODE_LINEAR", "BACKOFF_MODE_EXPONENTIAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#backoff_mode ClouddeployAutomation#backoff_mode}

---

##### `Wait`<sup>Optional</sup> <a name="Wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry.property.wait"></a>

```go
Wait *string
```

- *Type:* *string

Optional.

How long to wait for the first retry. Default is 0, and the maximum value is 14d. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#wait ClouddeployAutomation#wait}

---

### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback {
	DestinationPhase: *string,
	DisableRollbackIfRolloutPending: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase">DestinationPhase</a></code> | <code>*string</code> | Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending">DisableRollbackIfRolloutPending</a></code> | <code>interface{}</code> | Optional. If pending rollout exists on the target, the rollback operation will be aborted. |

---

##### `DestinationPhase`<sup>Optional</sup> <a name="DestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.destinationPhase"></a>

```go
DestinationPhase *string
```

- *Type:* *string

Optional. The starting phase ID for the Rollout. If unspecified, the Rollout will start in the stable phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

##### `DisableRollbackIfRolloutPending`<sup>Optional</sup> <a name="DisableRollbackIfRolloutPending" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback.property.disableRollbackIfRolloutPending"></a>

```go
DisableRollbackIfRolloutPending interface{}
```

- *Type:* interface{}

Optional. If pending rollout exists on the target, the rollback operation will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#disable_rollback_if_rollout_pending ClouddeployAutomation#disable_rollback_if_rollout_pending}

---

### ClouddeployAutomationRulesTimedPromoteReleaseRule <a name="ClouddeployAutomationRulesTimedPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationRulesTimedPromoteReleaseRule {
	Id: *string,
	Schedule: *string,
	TimeZone: *string,
	DestinationPhase: *string,
	DestinationTargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.id">Id</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule">Schedule</a></code> | <code>*string</code> | Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone">TimeZone</a></code> | <code>*string</code> | Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York). |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase">DestinationPhase</a></code> | <code>*string</code> | Optional. The starting phase of the rollout created by this rule. Default to the first phase. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId">DestinationTargetId</a></code> | <code>*string</code> | Optional. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.id"></a>

```go
Id *string
```

- *Type:* *string

Required.

ID of the rule. This id must be unique in the 'Automation' resource to which this rule belongs. The format is 'a-z{0,62}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Required. Schedule in crontab format. e.g. '0 9 * * 1' for every Monday at 9am.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#schedule ClouddeployAutomation#schedule}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Required. The time zone in IANA format IANA Time Zone Database (e.g. America/New_York).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#time_zone ClouddeployAutomation#time_zone}

---

##### `DestinationPhase`<sup>Optional</sup> <a name="DestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationPhase"></a>

```go
DestinationPhase *string
```

- *Type:* *string

Optional. The starting phase of the rollout created by this rule. Default to the first phase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#destination_phase ClouddeployAutomation#destination_phase}

---

##### `DestinationTargetId`<sup>Optional</sup> <a name="DestinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule.property.destinationTargetId"></a>

```go
DestinationTargetId *string
```

- *Type:* *string

Optional.

The ID of the stage in the pipeline to which this Release is deploying. If unspecified, default it to the next stage in the promotion flow. The value of this field could be one of the following:

* The last segment of a target name
* "@next", the next target in the promotion sequence"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#destination_target_id ClouddeployAutomation#destination_target_id}

---

### ClouddeployAutomationSelector <a name="ClouddeployAutomationSelector" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationSelector {
	Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.property.targets">Targets</a></code> | <code>interface{}</code> | targets block. |

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#targets ClouddeployAutomation#targets}

---

### ClouddeployAutomationSelectorTargets <a name="ClouddeployAutomationSelectorTargets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationSelectorTargets {
	Id: *string,
	Labels: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.id">Id</a></code> | <code>*string</code> | ID of the 'Target'. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Target labels. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.id"></a>

```go
Id *string
```

- *Type:* *string

ID of the 'Target'.

The value of this field could be one of the following: * The last segment of a target name. It only needs the ID to determine which target is being referred to * "*", all targets in a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#id ClouddeployAutomation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargets.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Target labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#labels ClouddeployAutomation#labels}

---

### ClouddeployAutomationTimeouts <a name="ClouddeployAutomationTimeouts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

&clouddeployautomation.ClouddeployAutomationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#create ClouddeployAutomation#create}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#delete ClouddeployAutomation#delete}. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#update ClouddeployAutomation#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#create ClouddeployAutomation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#delete ClouddeployAutomation#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/clouddeploy_automation#update ClouddeployAutomation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference <a name="ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesAdvanceRolloutRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases">ResetSourcePhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourcePhases` <a name="ResetSourcePhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetSourcePhases"></a>

```go
func ResetSourcePhases()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.resetWait"></a>

```go
func ResetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput">SourcePhasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput">WaitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases">SourcePhases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait">Wait</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SourcePhasesInput`<sup>Optional</sup> <a name="SourcePhasesInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhasesInput"></a>

```go
func SourcePhasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.waitInput"></a>

```go
func WaitInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourcePhases`<sup>Required</sup> <a name="SourcePhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.sourcePhases"></a>

```go
func SourcePhases() *[]*string
```

- *Type:* *[]*string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.wait"></a>

```go
func Wait() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployAutomationRulesAdvanceRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---


### ClouddeployAutomationRulesList <a name="ClouddeployAutomationRulesList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployAutomationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get"></a>

```go
func Get(index *f64) ClouddeployAutomationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployAutomationRulesOutputReference <a name="ClouddeployAutomationRulesOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployAutomationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule">PutAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule">PutPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule">PutRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule">PutTimedPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule">ResetAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule">ResetPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetRepairRolloutRule">ResetRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule">ResetTimedPromoteReleaseRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvanceRolloutRule` <a name="PutAdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule"></a>

```go
func PutAdvanceRolloutRule(value ClouddeployAutomationRulesAdvanceRolloutRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putAdvanceRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `PutPromoteReleaseRule` <a name="PutPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule"></a>

```go
func PutPromoteReleaseRule(value ClouddeployAutomationRulesPromoteReleaseRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `PutRepairRolloutRule` <a name="PutRepairRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule"></a>

```go
func PutRepairRolloutRule(value ClouddeployAutomationRulesRepairRolloutRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putRepairRolloutRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a>

---

##### `PutTimedPromoteReleaseRule` <a name="PutTimedPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule"></a>

```go
func PutTimedPromoteReleaseRule(value ClouddeployAutomationRulesTimedPromoteReleaseRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.putTimedPromoteReleaseRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---

##### `ResetAdvanceRolloutRule` <a name="ResetAdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetAdvanceRolloutRule"></a>

```go
func ResetAdvanceRolloutRule()
```

##### `ResetPromoteReleaseRule` <a name="ResetPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetPromoteReleaseRule"></a>

```go
func ResetPromoteReleaseRule()
```

##### `ResetRepairRolloutRule` <a name="ResetRepairRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetRepairRolloutRule"></a>

```go
func ResetRepairRolloutRule()
```

##### `ResetTimedPromoteReleaseRule` <a name="ResetTimedPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.resetTimedPromoteReleaseRule"></a>

```go
func ResetTimedPromoteReleaseRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRule">AdvanceRolloutRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRule">PromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRule">RepairRolloutRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference">ClouddeployAutomationRulesRepairRolloutRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule">TimedPromoteReleaseRule</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput">AdvanceRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput">PromoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput">RepairRolloutRuleInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput">TimedPromoteReleaseRuleInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvanceRolloutRule`<sup>Required</sup> <a name="AdvanceRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRule"></a>

```go
func AdvanceRolloutRule() ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference">ClouddeployAutomationRulesAdvanceRolloutRuleOutputReference</a>

---

##### `PromoteReleaseRule`<sup>Required</sup> <a name="PromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRule"></a>

```go
func PromoteReleaseRule() ClouddeployAutomationRulesPromoteReleaseRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesPromoteReleaseRuleOutputReference</a>

---

##### `RepairRolloutRule`<sup>Required</sup> <a name="RepairRolloutRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRule"></a>

```go
func RepairRolloutRule() ClouddeployAutomationRulesRepairRolloutRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference">ClouddeployAutomationRulesRepairRolloutRuleOutputReference</a>

---

##### `TimedPromoteReleaseRule`<sup>Required</sup> <a name="TimedPromoteReleaseRule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRule"></a>

```go
func TimedPromoteReleaseRule() ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference">ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference</a>

---

##### `AdvanceRolloutRuleInput`<sup>Optional</sup> <a name="AdvanceRolloutRuleInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.advanceRolloutRuleInput"></a>

```go
func AdvanceRolloutRuleInput() ClouddeployAutomationRulesAdvanceRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesAdvanceRolloutRule">ClouddeployAutomationRulesAdvanceRolloutRule</a>

---

##### `PromoteReleaseRuleInput`<sup>Optional</sup> <a name="PromoteReleaseRuleInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.promoteReleaseRuleInput"></a>

```go
func PromoteReleaseRuleInput() ClouddeployAutomationRulesPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---

##### `RepairRolloutRuleInput`<sup>Optional</sup> <a name="RepairRolloutRuleInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.repairRolloutRuleInput"></a>

```go
func RepairRolloutRuleInput() ClouddeployAutomationRulesRepairRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a>

---

##### `TimedPromoteReleaseRuleInput`<sup>Optional</sup> <a name="TimedPromoteReleaseRuleInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.timedPromoteReleaseRuleInput"></a>

```go
func TimedPromoteReleaseRuleInput() ClouddeployAutomationRulesTimedPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployAutomationRulesPromoteReleaseRuleOutputReference <a name="ClouddeployAutomationRulesPromoteReleaseRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesPromoteReleaseRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationRulesPromoteReleaseRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase">ResetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId">ResetDestinationTargetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPhase` <a name="ResetDestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```go
func ResetDestinationPhase()
```

##### `ResetDestinationTargetId` <a name="ResetDestinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```go
func ResetDestinationTargetId()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.resetWait"></a>

```go
func ResetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput">DestinationPhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">DestinationTargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput">WaitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase">DestinationPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId">DestinationTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait">Wait</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPhaseInput`<sup>Optional</sup> <a name="DestinationPhaseInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```go
func DestinationPhaseInput() *string
```

- *Type:* *string

---

##### `DestinationTargetIdInput`<sup>Optional</sup> <a name="DestinationTargetIdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```go
func DestinationTargetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.waitInput"></a>

```go
func WaitInput() *string
```

- *Type:* *string

---

##### `DestinationPhase`<sup>Required</sup> <a name="DestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```go
func DestinationPhase() *string
```

- *Type:* *string

---

##### `DestinationTargetId`<sup>Required</sup> <a name="DestinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```go
func DestinationTargetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.wait"></a>

```go
func Wait() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployAutomationRulesPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesPromoteReleaseRule">ClouddeployAutomationRulesPromoteReleaseRule</a>

---


### ClouddeployAutomationRulesRepairRolloutRuleOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesRepairRolloutRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationRulesRepairRolloutRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases">PutRepairPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs">ResetJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases">ResetPhases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases">ResetRepairPhases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRepairPhases` <a name="PutRepairPhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases"></a>

```go
func PutRepairPhases(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.putRepairPhases.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetJobs` <a name="ResetJobs" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetJobs"></a>

```go
func ResetJobs()
```

##### `ResetPhases` <a name="ResetPhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetPhases"></a>

```go
func ResetPhases()
```

##### `ResetRepairPhases` <a name="ResetRepairPhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.resetRepairPhases"></a>

```go
func ResetRepairPhases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases">RepairPhases</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput">JobsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput">PhasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput">RepairPhasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs">Jobs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases">Phases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepairPhases`<sup>Required</sup> <a name="RepairPhases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhases"></a>

```go
func RepairPhases() ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobsInput`<sup>Optional</sup> <a name="JobsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobsInput"></a>

```go
func JobsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PhasesInput`<sup>Optional</sup> <a name="PhasesInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phasesInput"></a>

```go
func PhasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RepairPhasesInput`<sup>Optional</sup> <a name="RepairPhasesInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.repairPhasesInput"></a>

```go
func RepairPhasesInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Jobs`<sup>Required</sup> <a name="Jobs" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.jobs"></a>

```go
func Jobs() *[]*string
```

- *Type:* *[]*string

---

##### `Phases`<sup>Required</sup> <a name="Phases" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.phases"></a>

```go
func Phases() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployAutomationRulesRepairRolloutRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRule">ClouddeployAutomationRulesRepairRolloutRule</a>

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get"></a>

```go
func Get(index *f64) ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback">PutRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback">ResetRollback</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetry` <a name="PutRetry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry"></a>

```go
func PutRetry(value ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---

##### `PutRollback` <a name="PutRollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback"></a>

```go
func PutRollback(value ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.putRollback.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetRollback` <a name="ResetRollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.resetRollback"></a>

```go
func ResetRollback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback">Rollback</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput">RetryInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput">RollbackInput</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retry"></a>

```go
func Retry() ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference</a>

---

##### `Rollback`<sup>Required</sup> <a name="Rollback" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollback"></a>

```go
func Rollback() ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference</a>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.retryInput"></a>

```go
func RetryInput() ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---

##### `RollbackInput`<sup>Optional</sup> <a name="RollbackInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.rollbackInput"></a>

```go
func RollbackInput() ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode">ResetBackoffMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait">ResetWait</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackoffMode` <a name="ResetBackoffMode" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetBackoffMode"></a>

```go
func ResetBackoffMode()
```

##### `ResetWait` <a name="ResetWait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.resetWait"></a>

```go
func ResetWait()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput">AttemptsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput">BackoffModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput">WaitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts">Attempts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode">BackoffMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait">Wait</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttemptsInput`<sup>Optional</sup> <a name="AttemptsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attemptsInput"></a>

```go
func AttemptsInput() *string
```

- *Type:* *string

---

##### `BackoffModeInput`<sup>Optional</sup> <a name="BackoffModeInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffModeInput"></a>

```go
func BackoffModeInput() *string
```

- *Type:* *string

---

##### `WaitInput`<sup>Optional</sup> <a name="WaitInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.waitInput"></a>

```go
func WaitInput() *string
```

- *Type:* *string

---

##### `Attempts`<sup>Required</sup> <a name="Attempts" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.attempts"></a>

```go
func Attempts() *string
```

- *Type:* *string

---

##### `BackoffMode`<sup>Required</sup> <a name="BackoffMode" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.backoffMode"></a>

```go
func BackoffMode() *string
```

- *Type:* *string

---

##### `Wait`<sup>Required</sup> <a name="Wait" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.wait"></a>

```go
func Wait() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetryOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRetry</a>

---


### ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference <a name="ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase">ResetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending">ResetDisableRollbackIfRolloutPending</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPhase` <a name="ResetDestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDestinationPhase"></a>

```go
func ResetDestinationPhase()
```

##### `ResetDisableRollbackIfRolloutPending` <a name="ResetDisableRollbackIfRolloutPending" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.resetDisableRollbackIfRolloutPending"></a>

```go
func ResetDisableRollbackIfRolloutPending()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput">DestinationPhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput">DisableRollbackIfRolloutPendingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase">DestinationPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending">DisableRollbackIfRolloutPending</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPhaseInput`<sup>Optional</sup> <a name="DestinationPhaseInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhaseInput"></a>

```go
func DestinationPhaseInput() *string
```

- *Type:* *string

---

##### `DisableRollbackIfRolloutPendingInput`<sup>Optional</sup> <a name="DisableRollbackIfRolloutPendingInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPendingInput"></a>

```go
func DisableRollbackIfRolloutPendingInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationPhase`<sup>Required</sup> <a name="DestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.destinationPhase"></a>

```go
func DestinationPhase() *string
```

- *Type:* *string

---

##### `DisableRollbackIfRolloutPending`<sup>Required</sup> <a name="DisableRollbackIfRolloutPending" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.disableRollbackIfRolloutPending"></a>

```go
func DisableRollbackIfRolloutPending() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollbackOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback">ClouddeployAutomationRulesRepairRolloutRuleRepairPhasesRollback</a>

---


### ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference <a name="ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase">ResetDestinationPhase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId">ResetDestinationTargetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPhase` <a name="ResetDestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationPhase"></a>

```go
func ResetDestinationPhase()
```

##### `ResetDestinationTargetId` <a name="ResetDestinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.resetDestinationTargetId"></a>

```go
func ResetDestinationTargetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput">DestinationPhaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput">DestinationTargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase">DestinationPhase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId">DestinationTargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationPhaseInput`<sup>Optional</sup> <a name="DestinationPhaseInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhaseInput"></a>

```go
func DestinationPhaseInput() *string
```

- *Type:* *string

---

##### `DestinationTargetIdInput`<sup>Optional</sup> <a name="DestinationTargetIdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetIdInput"></a>

```go
func DestinationTargetIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `DestinationPhase`<sup>Required</sup> <a name="DestinationPhase" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationPhase"></a>

```go
func DestinationPhase() *string
```

- *Type:* *string

---

##### `DestinationTargetId`<sup>Required</sup> <a name="DestinationTargetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.destinationTargetId"></a>

```go
func DestinationTargetId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployAutomationRulesTimedPromoteReleaseRule
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationRulesTimedPromoteReleaseRule">ClouddeployAutomationRulesTimedPromoteReleaseRule</a>

---


### ClouddeployAutomationSelectorOutputReference <a name="ClouddeployAutomationSelectorOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationSelectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationSelectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets">PutTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.putTargets.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList">ClouddeployAutomationSelectorTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targets"></a>

```go
func Targets() ClouddeployAutomationSelectorTargetsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList">ClouddeployAutomationSelectorTargetsList</a>

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddeployAutomationSelector
```

- *Type:* <a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelector">ClouddeployAutomationSelector</a>

---


### ClouddeployAutomationSelectorTargetsList <a name="ClouddeployAutomationSelectorTargetsList" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationSelectorTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddeployAutomationSelectorTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get"></a>

```go
func Get(index *f64) ClouddeployAutomationSelectorTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployAutomationSelectorTargetsOutputReference <a name="ClouddeployAutomationSelectorTargetsOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationSelectorTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddeployAutomationSelectorTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.resetLabels"></a>

```go
func ResetLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationSelectorTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddeployAutomationTimeoutsOutputReference <a name="ClouddeployAutomationTimeoutsOutputReference" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/clouddeployautomation"

clouddeployautomation.NewClouddeployAutomationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddeployAutomationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddeployAutomation.ClouddeployAutomationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



