# `backupDrBackupPlanAssociation` Submodule <a name="`backupDrBackupPlanAssociation` Submodule" id="@cdktf/provider-google.backupDrBackupPlanAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupDrBackupPlanAssociation <a name="BackupDrBackupPlanAssociation" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association google_backup_dr_backup_plan_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

new backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation(scope: Construct, id: string, config: BackupDrBackupPlanAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig">BackupDrBackupPlanAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig">BackupDrBackupPlanAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: BackupDrBackupPlanAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupDrBackupPlanAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupDrBackupPlanAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupDrBackupPlanAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupDrBackupPlanAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime">lastSuccessfulBackupConsistencyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo">rulesConfigInfo</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput">backupPlanAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput">backupPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan">backupPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId">backupPlanAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `lastSuccessfulBackupConsistencyTime`<sup>Required</sup> <a name="lastSuccessfulBackupConsistencyTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.lastSuccessfulBackupConsistencyTime"></a>

```typescript
public readonly lastSuccessfulBackupConsistencyTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rulesConfigInfo`<sup>Required</sup> <a name="rulesConfigInfo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.rulesConfigInfo"></a>

```typescript
public readonly rulesConfigInfo: BackupDrBackupPlanAssociationRulesConfigInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList">BackupDrBackupPlanAssociationRulesConfigInfoList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrBackupPlanAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference">BackupDrBackupPlanAssociationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `backupPlanAssociationIdInput`<sup>Optional</sup> <a name="backupPlanAssociationIdInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationIdInput"></a>

```typescript
public readonly backupPlanAssociationIdInput: string;
```

- *Type:* string

---

##### `backupPlanInput`<sup>Optional</sup> <a name="backupPlanInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanInput"></a>

```typescript
public readonly backupPlanInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BackupDrBackupPlanAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

---

##### `backupPlanAssociationId`<sup>Required</sup> <a name="backupPlanAssociationId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.backupPlanAssociationId"></a>

```typescript
public readonly backupPlanAssociationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupDrBackupPlanAssociationConfig <a name="BackupDrBackupPlanAssociationConfig" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

const backupDrBackupPlanAssociationConfig: backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan">backupPlan</a></code> | <code>string</code> | The BP with which resource needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId">backupPlanAssociationId</a></code> | <code>string</code> | The id of backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location">location</a></code> | <code>string</code> | The location for the backupplan association. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource">resource</a></code> | <code>string</code> | The resource for which BPA needs to be created. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType">resourceType</a></code> | <code>string</code> | The resource type of workload on which backupplan is applied. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backupPlan`<sup>Required</sup> <a name="backupPlan" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlan"></a>

```typescript
public readonly backupPlan: string;
```

- *Type:* string

The BP with which resource needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#backup_plan BackupDrBackupPlanAssociation#backup_plan}

---

##### `backupPlanAssociationId`<sup>Required</sup> <a name="backupPlanAssociationId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.backupPlanAssociationId"></a>

```typescript
public readonly backupPlanAssociationId: string;
```

- *Type:* string

The id of backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#backup_plan_association_id BackupDrBackupPlanAssociation#backup_plan_association_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the backupplan association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#location BackupDrBackupPlanAssociation#location}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

The resource for which BPA needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#resource BackupDrBackupPlanAssociation#resource}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

The resource type of workload on which backupplan is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#resource_type BackupDrBackupPlanAssociation#resource_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#id BackupDrBackupPlanAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#project BackupDrBackupPlanAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BackupDrBackupPlanAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#timeouts BackupDrBackupPlanAssociation#timeouts}

---

### BackupDrBackupPlanAssociationRulesConfigInfo <a name="BackupDrBackupPlanAssociationRulesConfigInfo" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

const backupDrBackupPlanAssociationRulesConfigInfo: backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo = { ... }
```


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

const backupDrBackupPlanAssociationRulesConfigInfoLastBackupError: backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError = { ... }
```


### BackupDrBackupPlanAssociationTimeouts <a name="BackupDrBackupPlanAssociationTimeouts" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

const backupDrBackupPlanAssociationTimeouts: backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#create BackupDrBackupPlanAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/backup_dr_backup_plan_association#delete BackupDrBackupPlanAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

new backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get"></a>

```typescript
public get(index: number): BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

new backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupError</a>

---


### BackupDrBackupPlanAssociationRulesConfigInfoList <a name="BackupDrBackupPlanAssociationRulesConfigInfoList" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

new backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get"></a>

```typescript
public get(index: number): BackupDrBackupPlanAssociationRulesConfigInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BackupDrBackupPlanAssociationRulesConfigInfoOutputReference <a name="BackupDrBackupPlanAssociationRulesConfigInfoOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

new backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError">lastBackupError</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState">lastBackupState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lastBackupError`<sup>Required</sup> <a name="lastBackupError" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupError"></a>

```typescript
public readonly lastBackupError: BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList">BackupDrBackupPlanAssociationRulesConfigInfoLastBackupErrorList</a>

---

##### `lastBackupState`<sup>Required</sup> <a name="lastBackupState" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.lastBackupState"></a>

```typescript
public readonly lastBackupState: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BackupDrBackupPlanAssociationRulesConfigInfo;
```

- *Type:* <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationRulesConfigInfo">BackupDrBackupPlanAssociationRulesConfigInfo</a>

---


### BackupDrBackupPlanAssociationTimeoutsOutputReference <a name="BackupDrBackupPlanAssociationTimeoutsOutputReference" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { backupDrBackupPlanAssociation } from '@cdktf/provider-google'

new backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupDrBackupPlanAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.backupDrBackupPlanAssociation.BackupDrBackupPlanAssociationTimeouts">BackupDrBackupPlanAssociationTimeouts</a>

---



