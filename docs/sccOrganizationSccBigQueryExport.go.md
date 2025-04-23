# `sccOrganizationSccBigQueryExport` Submodule <a name="`sccOrganizationSccBigQueryExport` Submodule" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SccOrganizationSccBigQueryExport <a name="SccOrganizationSccBigQueryExport" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export google_scc_organization_scc_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

sccorganizationsccbigqueryexport.NewSccOrganizationSccBigQueryExport(scope Construct, id *string, config SccOrganizationSccBigQueryExportConfig) SccOrganizationSccBigQueryExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig">SccOrganizationSccBigQueryExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig">SccOrganizationSccBigQueryExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts"></a>

```go
func PutTimeouts(value SccOrganizationSccBigQueryExportTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDataset"></a>

```go
func ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

sccorganizationsccbigqueryexport.SccOrganizationSccBigQueryExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

sccorganizationsccbigqueryexport.SccOrganizationSccBigQueryExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

sccorganizationsccbigqueryexport.SccOrganizationSccBigQueryExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

sccorganizationsccbigqueryexport.SccOrganizationSccBigQueryExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SccOrganizationSccBigQueryExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SccOrganizationSccBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SccOrganizationSccBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SccOrganizationSccBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.mostRecentEditor">MostRecentEditor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference">SccOrganizationSccBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportIdInput">BigQueryExportIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportId">BigQueryExportId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `MostRecentEditor`<sup>Required</sup> <a name="MostRecentEditor" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.mostRecentEditor"></a>

```go
func MostRecentEditor() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeouts"></a>

```go
func Timeouts() SccOrganizationSccBigQueryExportTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference">SccOrganizationSccBigQueryExportTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BigQueryExportIdInput`<sup>Optional</sup> <a name="BigQueryExportIdInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportIdInput"></a>

```go
func BigQueryExportIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.bigQueryExportId"></a>

```go
func BigQueryExportId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SccOrganizationSccBigQueryExportConfig <a name="SccOrganizationSccBigQueryExportConfig" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

&sccorganizationsccbigqueryexport.SccOrganizationSccBigQueryExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BigQueryExportId: *string,
	Organization: *string,
	Dataset: *string,
	Description: *string,
	Filter: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.bigQueryExportId">BigQueryExportId</a></code> | <code>*string</code> | This must be unique within the organization. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization whose Cloud Security Command Center the Big Query Export Config lives in. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dataset">Dataset</a></code> | <code>*string</code> | The dataset to write findings' updates to. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.description">Description</a></code> | <code>*string</code> | The description of the notification config (max of 1024 characters). |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.filter">Filter</a></code> | <code>*string</code> | Expression that defines the filter to apply across create/update events of findings. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#id SccOrganizationSccBigQueryExport#id}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BigQueryExportId`<sup>Required</sup> <a name="BigQueryExportId" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.bigQueryExportId"></a>

```go
BigQueryExportId *string
```

- *Type:* *string

This must be unique within the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#big_query_export_id SccOrganizationSccBigQueryExport#big_query_export_id}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization whose Cloud Security Command Center the Big Query Export Config lives in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#organization SccOrganizationSccBigQueryExport#organization}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

The dataset to write findings' updates to.

Its format is "projects/[projectId]/datasets/[bigquery_dataset_id]".
BigQuery Dataset unique ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#dataset SccOrganizationSccBigQueryExport#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the notification config (max of 1024 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#description SccOrganizationSccBigQueryExport#description}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Expression that defines the filter to apply across create/update events of findings.

The
expression is a list of zero or more restrictions combined via
logical operators AND and OR. Parentheses are supported, and OR
has higher precedence than AND.

Restrictions have the form <field> <operator> <value> and may have
a - character in front of them to indicate negation. The fields
map to those defined in the corresponding resource.

The supported operators are:

* = for all value types.
* >, <, >=, <= for integer values.
* :, meaning substring matching, for strings.

The supported value types are:

* string literals in quotes.
* integer literals without quotes.
* boolean literals true and false without quotes.

See
[Filtering notifications](https://cloud.google.com/security-command-center/docs/how-to-api-filter-notifications)
for information on how to write a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#filter SccOrganizationSccBigQueryExport#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#id SccOrganizationSccBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportConfig.property.timeouts"></a>

```go
Timeouts SccOrganizationSccBigQueryExportTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts">SccOrganizationSccBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#timeouts SccOrganizationSccBigQueryExport#timeouts}

---

### SccOrganizationSccBigQueryExportTimeouts <a name="SccOrganizationSccBigQueryExportTimeouts" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

&sccorganizationsccbigqueryexport.SccOrganizationSccBigQueryExportTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#create SccOrganizationSccBigQueryExport#create}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#delete SccOrganizationSccBigQueryExport#delete}. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#update SccOrganizationSccBigQueryExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#create SccOrganizationSccBigQueryExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#delete SccOrganizationSccBigQueryExport#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/scc_organization_scc_big_query_export#update SccOrganizationSccBigQueryExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SccOrganizationSccBigQueryExportTimeoutsOutputReference <a name="SccOrganizationSccBigQueryExportTimeoutsOutputReference" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/sccorganizationsccbigqueryexport"

sccorganizationsccbigqueryexport.NewSccOrganizationSccBigQueryExportTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SccOrganizationSccBigQueryExportTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.sccOrganizationSccBigQueryExport.SccOrganizationSccBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



