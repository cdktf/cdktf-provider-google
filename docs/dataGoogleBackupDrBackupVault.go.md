# `dataGoogleBackupDrBackupVault` Submodule <a name="`dataGoogleBackupDrBackupVault` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupVault <a name="DataGoogleBackupDrBackupVault" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault google_backup_dr_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglebackupdrbackupvault"

datagooglebackupdrbackupvault.NewDataGoogleBackupDrBackupVault(scope Construct, id *string, config DataGoogleBackupDrBackupVaultConfig) DataGoogleBackupDrBackupVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig">DataGoogleBackupDrBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig">DataGoogleBackupDrBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglebackupdrbackupvault"

datagooglebackupdrbackupvault.DataGoogleBackupDrBackupVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglebackupdrbackupvault"

datagooglebackupdrbackupvault.DataGoogleBackupDrBackupVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglebackupdrbackupvault"

datagooglebackupdrbackupvault.DataGoogleBackupDrBackupVault_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglebackupdrbackupvault"

datagooglebackupdrbackupvault.DataGoogleBackupDrBackupVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleBackupDrBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleBackupDrBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleBackupDrBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.accessRestriction">AccessRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.allowMissing">AllowMissing</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.annotations">Annotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupCount">BackupCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration">BackupMinimumEnforcedRetentionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.deletable">Deletable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.effectiveTime">EffectiveTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.forceDelete">ForceDelete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.forceUpdate">ForceUpdate</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.ignoreBackupPlanReferences">IgnoreBackupPlanReferences</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.ignoreInactiveDatasources">IgnoreInactiveDatasources</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.totalStoredBytes">TotalStoredBytes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupVaultIdInput">BackupVaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AccessRestriction`<sup>Required</sup> <a name="AccessRestriction" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.accessRestriction"></a>

```go
func AccessRestriction() *string
```

- *Type:* *string

---

##### `AllowMissing`<sup>Required</sup> <a name="AllowMissing" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.allowMissing"></a>

```go
func AllowMissing() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.annotations"></a>

```go
func Annotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `BackupCount`<sup>Required</sup> <a name="BackupCount" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupCount"></a>

```go
func BackupCount() *string
```

- *Type:* *string

---

##### `BackupMinimumEnforcedRetentionDuration`<sup>Required</sup> <a name="BackupMinimumEnforcedRetentionDuration" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupMinimumEnforcedRetentionDuration"></a>

```go
func BackupMinimumEnforcedRetentionDuration() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deletable`<sup>Required</sup> <a name="Deletable" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.deletable"></a>

```go
func Deletable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.effectiveAnnotations"></a>

```go
func EffectiveAnnotations() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EffectiveTime`<sup>Required</sup> <a name="EffectiveTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.effectiveTime"></a>

```go
func EffectiveTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.forceDelete"></a>

```go
func ForceDelete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.forceUpdate"></a>

```go
func ForceUpdate() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IgnoreBackupPlanReferences`<sup>Required</sup> <a name="IgnoreBackupPlanReferences" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.ignoreBackupPlanReferences"></a>

```go
func IgnoreBackupPlanReferences() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IgnoreInactiveDatasources`<sup>Required</sup> <a name="IgnoreInactiveDatasources" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.ignoreInactiveDatasources"></a>

```go
func IgnoreInactiveDatasources() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TotalStoredBytes`<sup>Required</sup> <a name="TotalStoredBytes" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.totalStoredBytes"></a>

```go
func TotalStoredBytes() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BackupVaultIdInput`<sup>Optional</sup> <a name="BackupVaultIdInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupVaultIdInput"></a>

```go
func BackupVaultIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.backupVaultId"></a>

```go
func BackupVaultId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupVaultConfig <a name="DataGoogleBackupDrBackupVaultConfig" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/datagooglebackupdrbackupvault"

&datagooglebackupdrbackupvault.DataGoogleBackupDrBackupVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BackupVaultId: *string,
	Location: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.backupVaultId">BackupVaultId</a></code> | <code>*string</code> | Required. ID of the requesting object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.location">Location</a></code> | <code>*string</code> | The GCP location for the backup vault. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault#id DataGoogleBackupDrBackupVault#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault#project DataGoogleBackupDrBackupVault#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupVaultId`<sup>Required</sup> <a name="BackupVaultId" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.backupVaultId"></a>

```go
BackupVaultId *string
```

- *Type:* *string

Required. ID of the requesting object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault#backup_vault_id DataGoogleBackupDrBackupVault#backup_vault_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The GCP location for the backup vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault#location DataGoogleBackupDrBackupVault#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault#id DataGoogleBackupDrBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBackupDrBackupVault.DataGoogleBackupDrBackupVaultConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/backup_dr_backup_vault#project DataGoogleBackupDrBackupVault#project}.

---



