# `bigqueryRoutine` Submodule <a name="`bigqueryRoutine` Submodule" id="@cdktf/provider-google.bigqueryRoutine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryRoutine <a name="BigqueryRoutine" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine google_bigquery_routine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.NewBigqueryRoutine(scope Construct, id *string, config BigqueryRoutineConfig) BigqueryRoutine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig">BigqueryRoutineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig">BigqueryRoutineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments">PutArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putRemoteFunctionOptions">PutRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putSparkOptions">PutSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDataGovernanceType">ResetDataGovernanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel">ResetDeterminismLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries">ResetImportedLibraries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRemoteFunctionOptions">ResetRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType">ResetReturnTableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType">ResetReturnType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetSparkOptions">ResetSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArguments` <a name="PutArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments"></a>

```go
func PutArguments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putArguments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRemoteFunctionOptions` <a name="PutRemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putRemoteFunctionOptions"></a>

```go
func PutRemoteFunctionOptions(value BigqueryRoutineRemoteFunctionOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putRemoteFunctionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

---

##### `PutSparkOptions` <a name="PutSparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putSparkOptions"></a>

```go
func PutSparkOptions(value BigqueryRoutineSparkOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putSparkOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts"></a>

```go
func PutTimeouts(value BigqueryRoutineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

---

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetDataGovernanceType` <a name="ResetDataGovernanceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDataGovernanceType"></a>

```go
func ResetDataGovernanceType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeterminismLevel` <a name="ResetDeterminismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetDeterminismLevel"></a>

```go
func ResetDeterminismLevel()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetId"></a>

```go
func ResetId()
```

##### `ResetImportedLibraries` <a name="ResetImportedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetImportedLibraries"></a>

```go
func ResetImportedLibraries()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetLanguage"></a>

```go
func ResetLanguage()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRemoteFunctionOptions` <a name="ResetRemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetRemoteFunctionOptions"></a>

```go
func ResetRemoteFunctionOptions()
```

##### `ResetReturnTableType` <a name="ResetReturnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnTableType"></a>

```go
func ResetReturnTableType()
```

##### `ResetReturnType` <a name="ResetReturnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetReturnType"></a>

```go
func ResetReturnType()
```

##### `ResetSparkOptions` <a name="ResetSparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetSparkOptions"></a>

```go
func ResetSparkOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryRoutine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.BigqueryRoutine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.BigqueryRoutine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.BigqueryRoutine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.BigqueryRoutine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigqueryRoutine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigqueryRoutine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigqueryRoutine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryRoutine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments">Arguments</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptions">RemoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference">BigqueryRoutineRemoteFunctionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptions">SparkOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference">BigqueryRoutineSparkOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput">ArgumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceTypeInput">DataGovernanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput">DatasetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput">DefinitionBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput">DeterminismLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput">ImportedLibrariesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptionsInput">RemoteFunctionOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput">ReturnTableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput">ReturnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput">RoutineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput">RoutineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptionsInput">SparkOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceType">DataGovernanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId">DatasetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody">DefinitionBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel">DeterminismLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries">ImportedLibraries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType">ReturnTableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType">ReturnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId">RoutineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType">RoutineType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.arguments"></a>

```go
func Arguments() BigqueryRoutineArgumentsList
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList">BigqueryRoutineArgumentsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *f64
```

- *Type:* *f64

---

##### `RemoteFunctionOptions`<sup>Required</sup> <a name="RemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptions"></a>

```go
func RemoteFunctionOptions() BigqueryRoutineRemoteFunctionOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference">BigqueryRoutineRemoteFunctionOptionsOutputReference</a>

---

##### `SparkOptions`<sup>Required</sup> <a name="SparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptions"></a>

```go
func SparkOptions() BigqueryRoutineSparkOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference">BigqueryRoutineSparkOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeouts"></a>

```go
func Timeouts() BigqueryRoutineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference">BigqueryRoutineTimeoutsOutputReference</a>

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.argumentsInput"></a>

```go
func ArgumentsInput() interface{}
```

- *Type:* interface{}

---

##### `DataGovernanceTypeInput`<sup>Optional</sup> <a name="DataGovernanceTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceTypeInput"></a>

```go
func DataGovernanceTypeInput() *string
```

- *Type:* *string

---

##### `DatasetIdInput`<sup>Optional</sup> <a name="DatasetIdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetIdInput"></a>

```go
func DatasetIdInput() *string
```

- *Type:* *string

---

##### `DefinitionBodyInput`<sup>Optional</sup> <a name="DefinitionBodyInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBodyInput"></a>

```go
func DefinitionBodyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeterminismLevelInput`<sup>Optional</sup> <a name="DeterminismLevelInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevelInput"></a>

```go
func DeterminismLevelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportedLibrariesInput`<sup>Optional</sup> <a name="ImportedLibrariesInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibrariesInput"></a>

```go
func ImportedLibrariesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RemoteFunctionOptionsInput`<sup>Optional</sup> <a name="RemoteFunctionOptionsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.remoteFunctionOptionsInput"></a>

```go
func RemoteFunctionOptionsInput() BigqueryRoutineRemoteFunctionOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

---

##### `ReturnTableTypeInput`<sup>Optional</sup> <a name="ReturnTableTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableTypeInput"></a>

```go
func ReturnTableTypeInput() *string
```

- *Type:* *string

---

##### `ReturnTypeInput`<sup>Optional</sup> <a name="ReturnTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTypeInput"></a>

```go
func ReturnTypeInput() *string
```

- *Type:* *string

---

##### `RoutineIdInput`<sup>Optional</sup> <a name="RoutineIdInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineIdInput"></a>

```go
func RoutineIdInput() *string
```

- *Type:* *string

---

##### `RoutineTypeInput`<sup>Optional</sup> <a name="RoutineTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineTypeInput"></a>

```go
func RoutineTypeInput() *string
```

- *Type:* *string

---

##### `SparkOptionsInput`<sup>Optional</sup> <a name="SparkOptionsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.sparkOptionsInput"></a>

```go
func SparkOptionsInput() BigqueryRoutineSparkOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataGovernanceType`<sup>Required</sup> <a name="DataGovernanceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.dataGovernanceType"></a>

```go
func DataGovernanceType() *string
```

- *Type:* *string

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.datasetId"></a>

```go
func DatasetId() *string
```

- *Type:* *string

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.definitionBody"></a>

```go
func DefinitionBody() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeterminismLevel`<sup>Required</sup> <a name="DeterminismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.determinismLevel"></a>

```go
func DeterminismLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportedLibraries`<sup>Required</sup> <a name="ImportedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.importedLibraries"></a>

```go
func ImportedLibraries() *[]*string
```

- *Type:* *[]*string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReturnTableType`<sup>Required</sup> <a name="ReturnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnTableType"></a>

```go
func ReturnTableType() *string
```

- *Type:* *string

---

##### `ReturnType`<sup>Required</sup> <a name="ReturnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.returnType"></a>

```go
func ReturnType() *string
```

- *Type:* *string

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineId"></a>

```go
func RoutineId() *string
```

- *Type:* *string

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.routineType"></a>

```go
func RoutineType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryRoutineArguments <a name="BigqueryRoutineArguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

&bigqueryroutine.BigqueryRoutineArguments {
	ArgumentKind: *string,
	DataType: *string,
	Mode: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind">ArgumentKind</a></code> | <code>*string</code> | Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType">DataType</a></code> | <code>*string</code> | A JSON schema for the data type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode">Mode</a></code> | <code>*string</code> | Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name">Name</a></code> | <code>*string</code> | The name of this argument. Can be absent for function return argument. |

---

##### `ArgumentKind`<sup>Optional</sup> <a name="ArgumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.argumentKind"></a>

```go
ArgumentKind *string
```

- *Type:* *string

Defaults to FIXED_TYPE. Default value: "FIXED_TYPE" Possible values: ["FIXED_TYPE", "ANY_TYPE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#argument_kind BigqueryRoutine#argument_kind}

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

A JSON schema for the data type.

Required unless argumentKind = ANY_TYPE.
~>**NOTE**: Because this field expects a JSON string, any changes to the string
will create a diff, even if the JSON itself hasn't changed. If the API returns
a different value for the same schema, e.g. it switched the order of values
or replaced STRUCT field type with RECORD field type, we currently cannot
suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#data_type BigqueryRoutine#data_type}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Specifies whether the argument is input or output. Can be set for procedures only. Possible values: ["IN", "OUT", "INOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#mode BigqueryRoutine#mode}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArguments.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this argument. Can be absent for function return argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#name BigqueryRoutine#name}

---

### BigqueryRoutineConfig <a name="BigqueryRoutineConfig" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

&bigqueryroutine.BigqueryRoutineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetId: *string,
	DefinitionBody: *string,
	RoutineId: *string,
	RoutineType: *string,
	Arguments: interface{},
	DataGovernanceType: *string,
	Description: *string,
	DeterminismLevel: *string,
	Id: *string,
	ImportedLibraries: *[]*string,
	Language: *string,
	Project: *string,
	RemoteFunctionOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions,
	ReturnTableType: *string,
	ReturnType: *string,
	SparkOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryRoutine.BigqueryRoutineSparkOptions,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.bigqueryRoutine.BigqueryRoutineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId">DatasetId</a></code> | <code>*string</code> | The ID of the dataset containing this routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody">DefinitionBody</a></code> | <code>*string</code> | The body of the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId">RoutineId</a></code> | <code>*string</code> | The ID of the the routine. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType">RoutineType</a></code> | <code>*string</code> | The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments">Arguments</a></code> | <code>interface{}</code> | arguments block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dataGovernanceType">DataGovernanceType</a></code> | <code>*string</code> | If set to DATA_MASKING, the function is validated and made available as a masking function. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description">Description</a></code> | <code>*string</code> | The description of the routine if defined. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel">DeterminismLevel</a></code> | <code>*string</code> | The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries">ImportedLibraries</a></code> | <code>*[]*string</code> | Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language">Language</a></code> | <code>*string</code> | The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"]. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.remoteFunctionOptions">RemoteFunctionOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a></code> | remote_function_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType">ReturnTableType</a></code> | <code>*string</code> | Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType">ReturnType</a></code> | <code>*string</code> | A JSON schema for the return type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.sparkOptions">SparkOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a></code> | spark_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetId`<sup>Required</sup> <a name="DatasetId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.datasetId"></a>

```go
DatasetId *string
```

- *Type:* *string

The ID of the dataset containing this routine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#dataset_id BigqueryRoutine#dataset_id}

---

##### `DefinitionBody`<sup>Required</sup> <a name="DefinitionBody" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.definitionBody"></a>

```go
DefinitionBody *string
```

- *Type:* *string

The body of the routine.

For functions, this is the expression in the AS clause.
If language=SQL, it is the substring inside (but excluding) the parentheses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#definition_body BigqueryRoutine#definition_body}

---

##### `RoutineId`<sup>Required</sup> <a name="RoutineId" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineId"></a>

```go
RoutineId *string
```

- *Type:* *string

The ID of the the routine.

The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#routine_id BigqueryRoutine#routine_id}

---

##### `RoutineType`<sup>Required</sup> <a name="RoutineType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.routineType"></a>

```go
RoutineType *string
```

- *Type:* *string

The type of routine. Possible values: ["SCALAR_FUNCTION", "PROCEDURE", "TABLE_VALUED_FUNCTION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#routine_type BigqueryRoutine#routine_type}

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.arguments"></a>

```go
Arguments interface{}
```

- *Type:* interface{}

arguments block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#arguments BigqueryRoutine#arguments}

---

##### `DataGovernanceType`<sup>Optional</sup> <a name="DataGovernanceType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.dataGovernanceType"></a>

```go
DataGovernanceType *string
```

- *Type:* *string

If set to DATA_MASKING, the function is validated and made available as a masking function.

For more information, see https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask Possible values: ["DATA_MASKING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#data_governance_type BigqueryRoutine#data_governance_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the routine if defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#description BigqueryRoutine#description}

---

##### `DeterminismLevel`<sup>Optional</sup> <a name="DeterminismLevel" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.determinismLevel"></a>

```go
DeterminismLevel *string
```

- *Type:* *string

The determinism level of the JavaScript UDF if defined. Possible values: ["DETERMINISM_LEVEL_UNSPECIFIED", "DETERMINISTIC", "NOT_DETERMINISTIC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#determinism_level BigqueryRoutine#determinism_level}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#id BigqueryRoutine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImportedLibraries`<sup>Optional</sup> <a name="ImportedLibraries" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.importedLibraries"></a>

```go
ImportedLibraries *[]*string
```

- *Type:* *[]*string

Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#imported_libraries BigqueryRoutine#imported_libraries}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

The language of the routine. Possible values: ["SQL", "JAVASCRIPT", "PYTHON", "JAVA", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#language BigqueryRoutine#language}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#project BigqueryRoutine#project}.

---

##### `RemoteFunctionOptions`<sup>Optional</sup> <a name="RemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.remoteFunctionOptions"></a>

```go
RemoteFunctionOptions BigqueryRoutineRemoteFunctionOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

remote_function_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#remote_function_options BigqueryRoutine#remote_function_options}

---

##### `ReturnTableType`<sup>Optional</sup> <a name="ReturnTableType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnTableType"></a>

```go
ReturnTableType *string
```

- *Type:* *string

Optional. Can be set only if routineType = "TABLE_VALUED_FUNCTION".

If absent, the return table type is inferred from definitionBody at query time in each query
that references this routine. If present, then the columns in the evaluated table result will
be cast to match the column types specificed in return table type, at query time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#return_table_type BigqueryRoutine#return_table_type}

---

##### `ReturnType`<sup>Optional</sup> <a name="ReturnType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.returnType"></a>

```go
ReturnType *string
```

- *Type:* *string

A JSON schema for the return type.

Optional if language = "SQL"; required otherwise.
If absent, the return type is inferred from definitionBody at query time in each query
that references this routine. If present, then the evaluated result will be cast to
the specified returned type at query time. ~>**NOTE**: Because this field expects a JSON
string, any changes to the string will create a diff, even if the JSON itself hasn't
changed. If the API returns a different value for the same schema, e.g. it switche
d the order of values or replaced STRUCT field type with RECORD field type, we currently
cannot suppress the recurring diff this causes. As a workaround, we recommend using
the schema as returned by the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#return_type BigqueryRoutine#return_type}

---

##### `SparkOptions`<sup>Optional</sup> <a name="SparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.sparkOptions"></a>

```go
SparkOptions BigqueryRoutineSparkOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

spark_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#spark_options BigqueryRoutine#spark_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineConfig.property.timeouts"></a>

```go
Timeouts BigqueryRoutineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts">BigqueryRoutineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#timeouts BigqueryRoutine#timeouts}

---

### BigqueryRoutineRemoteFunctionOptions <a name="BigqueryRoutineRemoteFunctionOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

&bigqueryroutine.BigqueryRoutineRemoteFunctionOptions {
	Connection: *string,
	Endpoint: *string,
	MaxBatchingRows: *string,
	UserDefinedContext: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.connection">Connection</a></code> | <code>*string</code> | Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.endpoint">Endpoint</a></code> | <code>*string</code> | Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows">MaxBatchingRows</a></code> | <code>*string</code> | Max number of rows in each batch sent to the remote service. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.userDefinedContext">UserDefinedContext</a></code> | <code>*map[string]*string</code> | User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.connection"></a>

```go
Connection *string
```

- *Type:* *string

Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service.

Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#connection BigqueryRoutine#connection}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Endpoint of the user-provided remote service, e.g. 'https://us-east1-my_gcf_project.cloudfunctions.net/remote_add'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#endpoint BigqueryRoutine#endpoint}

---

##### `MaxBatchingRows`<sup>Optional</sup> <a name="MaxBatchingRows" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.maxBatchingRows"></a>

```go
MaxBatchingRows *string
```

- *Type:* *string

Max number of rows in each batch sent to the remote service.

If absent or if 0,
BigQuery dynamically decides the number of rows in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#max_batching_rows BigqueryRoutine#max_batching_rows}

---

##### `UserDefinedContext`<sup>Optional</sup> <a name="UserDefinedContext" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions.property.userDefinedContext"></a>

```go
UserDefinedContext *map[string]*string
```

- *Type:* *map[string]*string

User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service.

The total number of bytes of keys and values must be less than 8KB.

An object containing a list of "key": value pairs. Example:
'{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#user_defined_context BigqueryRoutine#user_defined_context}

---

### BigqueryRoutineSparkOptions <a name="BigqueryRoutineSparkOptions" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

&bigqueryroutine.BigqueryRoutineSparkOptions {
	ArchiveUris: *[]*string,
	Connection: *string,
	ContainerImage: *string,
	FileUris: *[]*string,
	JarUris: *[]*string,
	MainClass: *string,
	MainFileUri: *string,
	Properties: *map[string]*string,
	PyFileUris: *[]*string,
	RuntimeVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | Archive files to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.connection">Connection</a></code> | <code>*string</code> | Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}". |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.containerImage">ContainerImage</a></code> | <code>*string</code> | Custom container image for the runtime environment. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | Files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.jarUris">JarUris</a></code> | <code>*[]*string</code> | JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainClass">MainClass</a></code> | <code>*string</code> | The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainFileUri">MainFileUri</a></code> | <code>*string</code> | The main file/jar URI of the Spark application. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.pyFileUris">PyFileUris</a></code> | <code>*[]*string</code> | Python files to be placed on the PYTHONPATH for PySpark application. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | Runtime version. If not specified, the default runtime version is used. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.archiveUris"></a>

```go
ArchiveUris *[]*string
```

- *Type:* *[]*string

Archive files to be extracted into the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#archive_uris BigqueryRoutine#archive_uris}

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.connection"></a>

```go
Connection *string
```

- *Type:* *string

Fully qualified name of the user-provided Spark connection object. Format: "projects/{projectId}/locations/{locationId}/connections/{connectionId}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#connection BigqueryRoutine#connection}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.containerImage"></a>

```go
ContainerImage *string
```

- *Type:* *string

Custom container image for the runtime environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#container_image BigqueryRoutine#container_image}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.fileUris"></a>

```go
FileUris *[]*string
```

- *Type:* *[]*string

Files to be placed in the working directory of each executor.

For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#file_uris BigqueryRoutine#file_uris}

---

##### `JarUris`<sup>Optional</sup> <a name="JarUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.jarUris"></a>

```go
JarUris *[]*string
```

- *Type:* *[]*string

JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#jar_uris BigqueryRoutine#jar_uris}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainClass"></a>

```go
MainClass *string
```

- *Type:* *string

The fully qualified name of a class in jarUris, for example, com.example.wordcount. Exactly one of mainClass and main_jar_uri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#main_class BigqueryRoutine#main_class}

---

##### `MainFileUri`<sup>Optional</sup> <a name="MainFileUri" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.mainFileUri"></a>

```go
MainFileUri *string
```

- *Type:* *string

The main file/jar URI of the Spark application.

Exactly one of the definitionBody field and the mainFileUri field must be set for Python.
Exactly one of mainClass and mainFileUri field should be set for Java/Scala language type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#main_file_uri BigqueryRoutine#main_file_uri}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Configuration properties as a set of key/value pairs, which will be passed on to the Spark application.

For more information, see Apache Spark and the procedure option list.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#properties BigqueryRoutine#properties}

---

##### `PyFileUris`<sup>Optional</sup> <a name="PyFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.pyFileUris"></a>

```go
PyFileUris *[]*string
```

- *Type:* *[]*string

Python files to be placed on the PYTHONPATH for PySpark application.

Supported file types: .py, .egg, and .zip. For more information about Apache Spark, see Apache Spark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#py_file_uris BigqueryRoutine#py_file_uris}

---

##### `RuntimeVersion`<sup>Optional</sup> <a name="RuntimeVersion" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions.property.runtimeVersion"></a>

```go
RuntimeVersion *string
```

- *Type:* *string

Runtime version. If not specified, the default runtime version is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#runtime_version BigqueryRoutine#runtime_version}

---

### BigqueryRoutineTimeouts <a name="BigqueryRoutineTimeouts" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

&bigqueryroutine.BigqueryRoutineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#create BigqueryRoutine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#delete BigqueryRoutine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.0/docs/resources/bigquery_routine#update BigqueryRoutine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryRoutineArgumentsList <a name="BigqueryRoutineArgumentsList" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.NewBigqueryRoutineArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BigqueryRoutineArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get"></a>

```go
func Get(index *f64) BigqueryRoutineArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryRoutineArgumentsOutputReference <a name="BigqueryRoutineArgumentsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.NewBigqueryRoutineArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BigqueryRoutineArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind">ResetArgumentKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArgumentKind` <a name="ResetArgumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetArgumentKind"></a>

```go
func ResetArgumentKind()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput">ArgumentKindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind">ArgumentKind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArgumentKindInput`<sup>Optional</sup> <a name="ArgumentKindInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKindInput"></a>

```go
func ArgumentKindInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ArgumentKind`<sup>Required</sup> <a name="ArgumentKind" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.argumentKind"></a>

```go
func ArgumentKind() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BigqueryRoutineRemoteFunctionOptionsOutputReference <a name="BigqueryRoutineRemoteFunctionOptionsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.NewBigqueryRoutineRemoteFunctionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryRoutineRemoteFunctionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection">ResetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows">ResetMaxBatchingRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext">ResetUserDefinedContext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnection` <a name="ResetConnection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetConnection"></a>

```go
func ResetConnection()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetMaxBatchingRows` <a name="ResetMaxBatchingRows" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetMaxBatchingRows"></a>

```go
func ResetMaxBatchingRows()
```

##### `ResetUserDefinedContext` <a name="ResetUserDefinedContext" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.resetUserDefinedContext"></a>

```go
func ResetUserDefinedContext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput">ConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput">MaxBatchingRowsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput">UserDefinedContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection">Connection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows">MaxBatchingRows</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext">UserDefinedContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionInput`<sup>Optional</sup> <a name="ConnectionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connectionInput"></a>

```go
func ConnectionInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `MaxBatchingRowsInput`<sup>Optional</sup> <a name="MaxBatchingRowsInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRowsInput"></a>

```go
func MaxBatchingRowsInput() *string
```

- *Type:* *string

---

##### `UserDefinedContextInput`<sup>Optional</sup> <a name="UserDefinedContextInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContextInput"></a>

```go
func UserDefinedContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.connection"></a>

```go
func Connection() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `MaxBatchingRows`<sup>Required</sup> <a name="MaxBatchingRows" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.maxBatchingRows"></a>

```go
func MaxBatchingRows() *string
```

- *Type:* *string

---

##### `UserDefinedContext`<sup>Required</sup> <a name="UserDefinedContext" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.userDefinedContext"></a>

```go
func UserDefinedContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryRoutineRemoteFunctionOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineRemoteFunctionOptions">BigqueryRoutineRemoteFunctionOptions</a>

---


### BigqueryRoutineSparkOptionsOutputReference <a name="BigqueryRoutineSparkOptionsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.NewBigqueryRoutineSparkOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryRoutineSparkOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetConnection">ResetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetJarUris">ResetJarUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainFileUri">ResetMainFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetPyFileUris">ResetPyFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion">ResetRuntimeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetArchiveUris"></a>

```go
func ResetArchiveUris()
```

##### `ResetConnection` <a name="ResetConnection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetConnection"></a>

```go
func ResetConnection()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetContainerImage"></a>

```go
func ResetContainerImage()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetFileUris"></a>

```go
func ResetFileUris()
```

##### `ResetJarUris` <a name="ResetJarUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetJarUris"></a>

```go
func ResetJarUris()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainClass"></a>

```go
func ResetMainClass()
```

##### `ResetMainFileUri` <a name="ResetMainFileUri" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetMainFileUri"></a>

```go
func ResetMainFileUri()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetPyFileUris` <a name="ResetPyFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetPyFileUris"></a>

```go
func ResetPyFileUris()
```

##### `ResetRuntimeVersion` <a name="ResetRuntimeVersion" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.resetRuntimeVersion"></a>

```go
func ResetRuntimeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connectionInput">ConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput">JarUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput">MainFileUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput">PyFileUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput">RuntimeVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connection">Connection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImage">ContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUris">FileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUris">JarUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClass">MainClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUri">MainFileUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUris">PyFileUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUrisInput"></a>

```go
func ArchiveUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionInput`<sup>Optional</sup> <a name="ConnectionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connectionInput"></a>

```go
func ConnectionInput() *string
```

- *Type:* *string

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImageInput"></a>

```go
func ContainerImageInput() *string
```

- *Type:* *string

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUrisInput"></a>

```go
func FileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `JarUrisInput`<sup>Optional</sup> <a name="JarUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUrisInput"></a>

```go
func JarUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClassInput"></a>

```go
func MainClassInput() *string
```

- *Type:* *string

---

##### `MainFileUriInput`<sup>Optional</sup> <a name="MainFileUriInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUriInput"></a>

```go
func MainFileUriInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PyFileUrisInput`<sup>Optional</sup> <a name="PyFileUrisInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUrisInput"></a>

```go
func PyFileUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeVersionInput`<sup>Optional</sup> <a name="RuntimeVersionInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersionInput"></a>

```go
func RuntimeVersionInput() *string
```

- *Type:* *string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.archiveUris"></a>

```go
func ArchiveUris() *[]*string
```

- *Type:* *[]*string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.connection"></a>

```go
func Connection() *string
```

- *Type:* *string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.containerImage"></a>

```go
func ContainerImage() *string
```

- *Type:* *string

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.fileUris"></a>

```go
func FileUris() *[]*string
```

- *Type:* *[]*string

---

##### `JarUris`<sup>Required</sup> <a name="JarUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.jarUris"></a>

```go
func JarUris() *[]*string
```

- *Type:* *[]*string

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainClass"></a>

```go
func MainClass() *string
```

- *Type:* *string

---

##### `MainFileUri`<sup>Required</sup> <a name="MainFileUri" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.mainFileUri"></a>

```go
func MainFileUri() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PyFileUris`<sup>Required</sup> <a name="PyFileUris" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.pyFileUris"></a>

```go
func PyFileUris() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BigqueryRoutineSparkOptions
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineSparkOptions">BigqueryRoutineSparkOptions</a>

---


### BigqueryRoutineTimeoutsOutputReference <a name="BigqueryRoutineTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/bigqueryroutine"

bigqueryroutine.NewBigqueryRoutineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigqueryRoutineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryRoutine.BigqueryRoutineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



