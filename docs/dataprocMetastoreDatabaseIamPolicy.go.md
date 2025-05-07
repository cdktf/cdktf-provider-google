# `dataprocMetastoreDatabaseIamPolicy` Submodule <a name="`dataprocMetastoreDatabaseIamPolicy` Submodule" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocMetastoreDatabaseIamPolicy <a name="DataprocMetastoreDatabaseIamPolicy" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy google_dataproc_metastore_database_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocmetastoredatabaseiampolicy"

dataprocmetastoredatabaseiampolicy.NewDataprocMetastoreDatabaseIamPolicy(scope Construct, id *string, config DataprocMetastoreDatabaseIamPolicyConfig) DataprocMetastoreDatabaseIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig">DataprocMetastoreDatabaseIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig">DataprocMetastoreDatabaseIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocMetastoreDatabaseIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocmetastoredatabaseiampolicy"

dataprocmetastoredatabaseiampolicy.DataprocMetastoreDatabaseIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocmetastoredatabaseiampolicy"

dataprocmetastoredatabaseiampolicy.DataprocMetastoreDatabaseIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocmetastoredatabaseiampolicy"

dataprocmetastoredatabaseiampolicy.DataprocMetastoreDatabaseIamPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocmetastoredatabaseiampolicy"

dataprocmetastoredatabaseiampolicy.DataprocMetastoreDatabaseIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataprocMetastoreDatabaseIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataprocMetastoreDatabaseIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataprocMetastoreDatabaseIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataprocMetastoreDatabaseIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.databaseInput">DatabaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.database">Database</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.databaseInput"></a>

```go
func DatabaseInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.policyDataInput"></a>

```go
func PolicyDataInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.database"></a>

```go
func Database() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocMetastoreDatabaseIamPolicyConfig <a name="DataprocMetastoreDatabaseIamPolicyConfig" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/dataprocmetastoredatabaseiampolicy"

&dataprocmetastoredatabaseiampolicy.DataprocMetastoreDatabaseIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Database: *string,
	PolicyData: *string,
	ServiceId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.database">Database</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#database DataprocMetastoreDatabaseIamPolicy#database}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#policy_data DataprocMetastoreDatabaseIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#service_id DataprocMetastoreDatabaseIamPolicy#service_id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#id DataprocMetastoreDatabaseIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#location DataprocMetastoreDatabaseIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#project DataprocMetastoreDatabaseIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.database"></a>

```go
Database *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#database DataprocMetastoreDatabaseIamPolicy#database}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.policyData"></a>

```go
PolicyData *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#policy_data DataprocMetastoreDatabaseIamPolicy#policy_data}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#service_id DataprocMetastoreDatabaseIamPolicy#service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#id DataprocMetastoreDatabaseIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#location DataprocMetastoreDatabaseIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocMetastoreDatabaseIamPolicy.DataprocMetastoreDatabaseIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/dataproc_metastore_database_iam_policy#project DataprocMetastoreDatabaseIamPolicy#project}.

---



