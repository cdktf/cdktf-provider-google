# `biglakeTable` Submodule <a name="`biglakeTable` Submodule" id="@cdktf/provider-google.biglakeTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeTable <a name="BiglakeTable" id="@cdktf/provider-google.biglakeTable.BiglakeTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table google_biglake_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.NewBiglakeTable(scope Construct, id *string, config BiglakeTableConfig) BiglakeTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig">BiglakeTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.biglakeTable.BiglakeTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig">BiglakeTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.putHiveOptions">PutHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetHiveOptions">ResetHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.biglakeTable.BiglakeTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.biglakeTable.BiglakeTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.biglakeTable.BiglakeTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.biglakeTable.BiglakeTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.biglakeTable.BiglakeTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.biglakeTable.BiglakeTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeTable.BiglakeTable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHiveOptions` <a name="PutHiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putHiveOptions"></a>

```go
func PutHiveOptions(value BiglakeTableHiveOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putHiveOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putTimeouts"></a>

```go
func PutTimeouts(value BiglakeTableTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a>

---

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetDatabase"></a>

```go
func ResetDatabase()
```

##### `ResetHiveOptions` <a name="ResetHiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetHiveOptions"></a>

```go
func ResetHiveOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.biglakeTable.BiglakeTable.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BiglakeTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.BiglakeTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.BiglakeTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.BiglakeTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeTable.BiglakeTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.BiglakeTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BiglakeTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BiglakeTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BiglakeTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeTable.BiglakeTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BiglakeTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.deleteTime">DeleteTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptions">HiveOptions</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference">BiglakeTableHiveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference">BiglakeTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptionsInput">HiveOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.deleteTime"></a>

```go
func DeleteTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `HiveOptions`<sup>Required</sup> <a name="HiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptions"></a>

```go
func HiveOptions() BiglakeTableHiveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference">BiglakeTableHiveOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeouts"></a>

```go
func Timeouts() BiglakeTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference">BiglakeTableTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `HiveOptionsInput`<sup>Optional</sup> <a name="HiveOptionsInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.hiveOptionsInput"></a>

```go
func HiveOptionsInput() BiglakeTableHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.biglakeTable.BiglakeTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeTableConfig <a name="BiglakeTableConfig" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

&biglaketable.BiglakeTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Database: *string,
	HiveOptions: github.com/cdktf/cdktf-provider-google-go/google/v13.biglakeTable.BiglakeTableHiveOptions,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.biglakeTable.BiglakeTableTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.name">Name</a></code> | <code>*string</code> | Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.database">Database</a></code> | <code>*string</code> | The id of the parent database. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.hiveOptions">HiveOptions</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#id BiglakeTable#id}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.type">Type</a></code> | <code>*string</code> | The database type. Possible values: ["HIVE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Output only. The name of the Table. Format: projects/{project_id_or_number}/locations/{locationId}/catalogs/{catalogId}/databases/{databaseId}/tables/{tableId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#name BiglakeTable#name}

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

The id of the parent database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#database BiglakeTable#database}

---

##### `HiveOptions`<sup>Optional</sup> <a name="HiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.hiveOptions"></a>

```go
HiveOptions BiglakeTableHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#hive_options BiglakeTable#hive_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#id BiglakeTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.timeouts"></a>

```go
Timeouts BiglakeTableTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts">BiglakeTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#timeouts BiglakeTable#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.biglakeTable.BiglakeTableConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The database type. Possible values: ["HIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#type BiglakeTable#type}

---

### BiglakeTableHiveOptions <a name="BiglakeTableHiveOptions" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

&biglaketable.BiglakeTableHiveOptions {
	Parameters: *map[string]*string,
	StorageDescriptor: github.com/cdktf/cdktf-provider-google-go/google/v13.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor,
	TableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | Stores user supplied Hive table parameters. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.tableType">TableType</a></code> | <code>*string</code> | Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.parameters"></a>

```go
Parameters *map[string]*string
```

- *Type:* *map[string]*string

Stores user supplied Hive table parameters.

An object containing a
list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#parameters BiglakeTable#parameters}

---

##### `StorageDescriptor`<sup>Optional</sup> <a name="StorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.storageDescriptor"></a>

```go
StorageDescriptor BiglakeTableHiveOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#storage_descriptor BiglakeTable#storage_descriptor}

---

##### `TableType`<sup>Optional</sup> <a name="TableType" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions.property.tableType"></a>

```go
TableType *string
```

- *Type:* *string

Hive table type. For example, MANAGED_TABLE, EXTERNAL_TABLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#table_type BiglakeTable#table_type}

---

### BiglakeTableHiveOptionsStorageDescriptor <a name="BiglakeTableHiveOptionsStorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

&biglaketable.BiglakeTableHiveOptionsStorageDescriptor {
	InputFormat: *string,
	LocationUri: *string,
	OutputFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.inputFormat">InputFormat</a></code> | <code>*string</code> | The fully qualified Java class name of the input format. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.locationUri">LocationUri</a></code> | <code>*string</code> | Cloud Storage folder URI where the table data is stored, starting with "gs://". |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | The fully qualified Java class name of the output format. |

---

##### `InputFormat`<sup>Optional</sup> <a name="InputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.inputFormat"></a>

```go
InputFormat *string
```

- *Type:* *string

The fully qualified Java class name of the input format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#input_format BiglakeTable#input_format}

---

##### `LocationUri`<sup>Optional</sup> <a name="LocationUri" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.locationUri"></a>

```go
LocationUri *string
```

- *Type:* *string

Cloud Storage folder URI where the table data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#location_uri BiglakeTable#location_uri}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

The fully qualified Java class name of the output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#output_format BiglakeTable#output_format}

---

### BiglakeTableTimeouts <a name="BiglakeTableTimeouts" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

&biglaketable.BiglakeTableTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#create BiglakeTable#create}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#delete BiglakeTable#delete}. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#update BiglakeTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#create BiglakeTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#delete BiglakeTable#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/biglake_table#update BiglakeTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeTableHiveOptionsOutputReference <a name="BiglakeTableHiveOptionsOutputReference" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.NewBiglakeTableHiveOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeTableHiveOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.putStorageDescriptor">PutStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetStorageDescriptor">ResetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetTableType">ResetTableType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageDescriptor` <a name="PutStorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.putStorageDescriptor"></a>

```go
func PutStorageDescriptor(value BiglakeTableHiveOptionsStorageDescriptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetStorageDescriptor` <a name="ResetStorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetStorageDescriptor"></a>

```go
func ResetStorageDescriptor()
```

##### `ResetTableType` <a name="ResetTableType" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.resetTableType"></a>

```go
func ResetTableType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptor">StorageDescriptor</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference">BiglakeTableHiveOptionsStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput">StorageDescriptorInput</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableTypeInput">TableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parameters">Parameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageDescriptor`<sup>Required</sup> <a name="StorageDescriptor" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptor"></a>

```go
func StorageDescriptor() BiglakeTableHiveOptionsStorageDescriptorOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference">BiglakeTableHiveOptionsStorageDescriptorOutputReference</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StorageDescriptorInput`<sup>Optional</sup> <a name="StorageDescriptorInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.storageDescriptorInput"></a>

```go
func StorageDescriptorInput() BiglakeTableHiveOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableTypeInput"></a>

```go
func TableTypeInput() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.parameters"></a>

```go
func Parameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeTableHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptions">BiglakeTableHiveOptions</a>

---


### BiglakeTableHiveOptionsStorageDescriptorOutputReference <a name="BiglakeTableHiveOptionsStorageDescriptorOutputReference" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.NewBiglakeTableHiveOptionsStorageDescriptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeTableHiveOptionsStorageDescriptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat">ResetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri">ResetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputFormat` <a name="ResetInputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetInputFormat"></a>

```go
func ResetInputFormat()
```

##### `ResetLocationUri` <a name="ResetLocationUri" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetLocationUri"></a>

```go
func ResetLocationUri()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput">InputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput">LocationUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat">InputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputFormatInput`<sup>Optional</sup> <a name="InputFormatInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormatInput"></a>

```go
func InputFormatInput() *string
```

- *Type:* *string

---

##### `LocationUriInput`<sup>Optional</sup> <a name="LocationUriInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUriInput"></a>

```go
func LocationUriInput() *string
```

- *Type:* *string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `InputFormat`<sup>Required</sup> <a name="InputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.inputFormat"></a>

```go
func InputFormat() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptorOutputReference.property.internalValue"></a>

```go
func InternalValue() BiglakeTableHiveOptionsStorageDescriptor
```

- *Type:* <a href="#@cdktf/provider-google.biglakeTable.BiglakeTableHiveOptionsStorageDescriptor">BiglakeTableHiveOptionsStorageDescriptor</a>

---


### BiglakeTableTimeoutsOutputReference <a name="BiglakeTableTimeoutsOutputReference" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/biglaketable"

biglaketable.NewBiglakeTableTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BiglakeTableTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.biglakeTable.BiglakeTableTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



