# `dataGoogleBackupDrBackupPlanAssociation` Submodule <a name="`dataGoogleBackupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrBackupPlanAssociation <a name="DataGoogleBackupDrBackupPlanAssociation" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

new dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation(scope: Construct, id: string, config: DataGoogleBackupDrBackupPlanAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig">DataGoogleBackupDrBackupPlanAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig">DataGoogleBackupDrBackupPlanAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleBackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrBackupPlanAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlan">backupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo">rulesConfigInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">backupPlanAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId">backupPlanAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```typescript
public readonly lastSuccessfulBackupConsistencyTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `rulesConfigInfo`<sup>Required</sup> <a name="rulesConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```typescript
public readonly rulesConfigInfo: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backupPlanAssociationIdInput`<sup>Optional</sup> <a name="backupPlanAssociationIdInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```typescript
public readonly backupPlanAssociationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `backupPlanAssociationId`<sup>Required</sup> <a name="backupPlanAssociationId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```typescript
public readonly backupPlanAssociationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrBackupPlanAssociationConfig <a name="DataGoogleBackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

const dataGoogleBackupDrBackupPlanAssociationConfig: dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">backupPlanAssociationId</a></code> | <code>string</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.location">location</a></code> | <code>string</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPlanAssociationId`<sup>Required</sup> <a name="backupPlanAssociationId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```typescript
public readonly backupPlanAssociationId: string;
```

- *Type:* string

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#backup_plan_association_id DataGoogleBackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#location DataGoogleBackupDrBackupPlanAssociation#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#id DataGoogleBackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/data-sources/backup_dr_backup_plan_association#project DataGoogleBackupDrBackupPlanAssociation#project}.

---

### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

const dataGoogleBackupDrBackupPlanAssociationRulesConfigInfo: dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo = { ... }
```


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

const dataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError: dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

new dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

new dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

new dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```typescript
public get(index: number): DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleBackupDrBackupPlanAssociation } from '@cdktf/provider-google'

new dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```typescript
public readonly lastBackupError: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```typescript
public readonly lastBackupState: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrBackupPlanAssociation.DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo">DataGoogleBackupDrBackupPlanAssociationRulesConfigInfo</a>

---



