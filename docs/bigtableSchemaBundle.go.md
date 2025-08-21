# `bigtableSchemaBundle` Submodule <a name="`bigtableSchemaBundle` Submodule" id="@cdktf/provider-google.bigtableSchemaBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableSchemaBundle <a name="BigtableSchemaBundle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle google_bigtable_schema_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

bigtableschemabundle.NewBigtableSchemaBundle(scope Construct, id *string, config BigtableSchemaBundleConfig) BigtableSchemaBundle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig">BigtableSchemaBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig">BigtableSchemaBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema">PutProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings">ResetIgnoreWarnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProtoSchema` <a name="PutProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema"></a>

```go
func PutProtoSchema(value BigtableSchemaBundleProtoSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putProtoSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts"></a>

```go
func PutTimeouts(value BigtableSchemaBundleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreWarnings` <a name="ResetIgnoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetIgnoreWarnings"></a>

```go
func ResetIgnoreWarnings()
```

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetInstance"></a>

```go
func ResetInstance()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTable"></a>

```go
func ResetTable()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigtableSchemaBundle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

bigtableschemabundle.BigtableSchemaBundle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

bigtableschemabundle.BigtableSchemaBundle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

bigtableschemabundle.BigtableSchemaBundle_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

bigtableschemabundle.BigtableSchemaBundle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BigtableSchemaBundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BigtableSchemaBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BigtableSchemaBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BigtableSchemaBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema">ProtoSchema</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput">IgnoreWarningsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput">ProtoSchemaInput</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput">SchemaBundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput">TableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId">SchemaBundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table">Table</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtoSchema`<sup>Required</sup> <a name="ProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchema"></a>

```go
func ProtoSchema() BigtableSchemaBundleProtoSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference">BigtableSchemaBundleProtoSchemaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeouts"></a>

```go
func Timeouts() BigtableSchemaBundleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference">BigtableSchemaBundleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreWarningsInput`<sup>Optional</sup> <a name="IgnoreWarningsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarningsInput"></a>

```go
func IgnoreWarningsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ProtoSchemaInput`<sup>Optional</sup> <a name="ProtoSchemaInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.protoSchemaInput"></a>

```go
func ProtoSchemaInput() BigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---

##### `SchemaBundleIdInput`<sup>Optional</sup> <a name="SchemaBundleIdInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleIdInput"></a>

```go
func SchemaBundleIdInput() *string
```

- *Type:* *string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tableInput"></a>

```go
func TableInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreWarnings`<sup>Required</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.ignoreWarnings"></a>

```go
func IgnoreWarnings() interface{}
```

- *Type:* interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SchemaBundleId`<sup>Required</sup> <a name="SchemaBundleId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.schemaBundleId"></a>

```go
func SchemaBundleId() *string
```

- *Type:* *string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.table"></a>

```go
func Table() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableSchemaBundleConfig <a name="BigtableSchemaBundleConfig" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

&bigtableschemabundle.BigtableSchemaBundleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProtoSchema: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema,
	SchemaBundleId: *string,
	Id: *string,
	IgnoreWarnings: interface{},
	Instance: *string,
	Project: *string,
	Table: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.bigtableSchemaBundle.BigtableSchemaBundleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema">ProtoSchema</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId">SchemaBundleId</a></code> | <code>*string</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings">IgnoreWarnings</a></code> | <code>interface{}</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance">Instance</a></code> | <code>*string</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table">Table</a></code> | <code>*string</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProtoSchema`<sup>Required</sup> <a name="ProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.protoSchema"></a>

```go
ProtoSchema BigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#proto_schema BigtableSchemaBundle#proto_schema}

---

##### `SchemaBundleId`<sup>Required</sup> <a name="SchemaBundleId" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.schemaBundleId"></a>

```go
SchemaBundleId *string
```

- *Type:* *string

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#schema_bundle_id BigtableSchemaBundle#schema_bundle_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#id BigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWarnings`<sup>Optional</sup> <a name="IgnoreWarnings" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.ignoreWarnings"></a>

```go
IgnoreWarnings interface{}
```

- *Type:* interface{}

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#ignore_warnings BigtableSchemaBundle#ignore_warnings}

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#instance BigtableSchemaBundle#instance}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#project BigtableSchemaBundle#project}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.table"></a>

```go
Table *string
```

- *Type:* *string

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#table BigtableSchemaBundle#table}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleConfig.property.timeouts"></a>

```go
Timeouts BigtableSchemaBundleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts">BigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#timeouts BigtableSchemaBundle#timeouts}

---

### BigtableSchemaBundleProtoSchema <a name="BigtableSchemaBundleProtoSchema" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

&bigtableschemabundle.BigtableSchemaBundleProtoSchema {
	ProtoDescriptors: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors">ProtoDescriptors</a></code> | <code>*string</code> | Base64 encoded content of the file. |

---

##### `ProtoDescriptors`<sup>Required</sup> <a name="ProtoDescriptors" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema.property.protoDescriptors"></a>

```go
ProtoDescriptors *string
```

- *Type:* *string

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#proto_descriptors BigtableSchemaBundle#proto_descriptors}

---

### BigtableSchemaBundleTimeouts <a name="BigtableSchemaBundleTimeouts" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

&bigtableschemabundle.BigtableSchemaBundleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#create BigtableSchemaBundle#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#delete BigtableSchemaBundle#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/bigtable_schema_bundle#update BigtableSchemaBundle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableSchemaBundleProtoSchemaOutputReference <a name="BigtableSchemaBundleProtoSchemaOutputReference" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

bigtableschemabundle.NewBigtableSchemaBundleProtoSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableSchemaBundleProtoSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput">ProtoDescriptorsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors">ProtoDescriptors</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtoDescriptorsInput`<sup>Optional</sup> <a name="ProtoDescriptorsInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput"></a>

```go
func ProtoDescriptorsInput() *string
```

- *Type:* *string

---

##### `ProtoDescriptors`<sup>Required</sup> <a name="ProtoDescriptors" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors"></a>

```go
func ProtoDescriptors() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() BigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleProtoSchema">BigtableSchemaBundleProtoSchema</a>

---


### BigtableSchemaBundleTimeoutsOutputReference <a name="BigtableSchemaBundleTimeoutsOutputReference" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/bigtableschemabundle"

bigtableschemabundle.NewBigtableSchemaBundleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BigtableSchemaBundleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigtableSchemaBundle.BigtableSchemaBundleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



