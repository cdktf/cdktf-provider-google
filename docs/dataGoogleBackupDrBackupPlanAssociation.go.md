# `dataGoogleBackupDrBackupPlanAssociation` Submodule <a name="`dataGoogleBackupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlanAssociation <a name="DataGoogleBackupDrBackupPlanAssociation" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.NewDataGoogleBackupDrBackupPlanAssociation(scope Construct, id *string, config DataGoogleBackupDrBackupPlanAssociationConfig) DataGoogleBackupDrBackupPlanAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig">DataGoogleBackupDrBackupPlanAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig">DataGoogleBackupDrBackupPlanAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.DataGoogleBackupDrBackupPlanAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.DataGoogleBackupDrBackupPlanAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.DataGoogleBackupDrBackupPlanAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.DataGoogleBackupDrBackupPlanAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlan">BackupPlan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dataSource">DataSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">LastSuccessfulBackupConsistencyTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo">RulesConfigInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">BackupPlanAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId">BackupPlanAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlan"></a>

```go
func BackupPlan() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dataSource"></a>

```go
func DataSource() *string
```

- *Type:* *string

---

##### `LastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="LastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```go
func LastSuccessfulBackupConsistencyTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `RulesConfigInfo`<sup>Required</sup> <a name="RulesConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```go
func RulesConfigInfo() DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackupPlanAssociationIdInput`<sup>Optional</sup> <a name="BackupPlanAssociationIdInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```go
func BackupPlanAssociationIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupPlanAssociationId`<sup>Required</sup> <a name="BackupPlanAssociationId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```go
func BackupPlanAssociationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanAssociationConfig <a name="DataGoogleBackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

&datagooglebackupdrbackupplanassociation.DataGoogleBackupDrBackupPlanAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPlanAssociationId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">BackupPlanAssociationId</a></code> | <code>*string</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.location">Location</a></code> | <code>*string</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlanAssociationId`<sup>Required</sup> <a name="BackupPlanAssociationId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```go
BackupPlanAssociationId *string
```

- *Type:* *string

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association#backup_plan_association_id DataGoogleBackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association#location DataGoogleBackupDrBackupPlanAssociation#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}.

---

### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

&datagooglebackupdrbackupplanassociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo {

}
```


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

&datagooglebackupdrbackupplanassociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.NewDataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.NewDataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.NewDataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```go
func Get(index *f64) DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagooglebackupdrbackupplanassociation"

datagooglebackupdrbackupplanassociation.NewDataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">LastBackupError</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">LastBackupState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastBackupError`<sup>Required</sup> <a name="LastBackupError" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```go
func LastBackupError() DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `LastBackupState`<sup>Required</sup> <a name="LastBackupState" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```go
func LastBackupState() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo</a>

---



