# `migrationCenterPreferenceSet` Submodule <a name="`migrationCenterPreferenceSet` Submodule" id="@cdktf/provider-google.migrationCenterPreferenceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterPreferenceSet <a name="MigrationCenterPreferenceSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set google_migration_center_preference_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSet(scope: Construct, id: string, config: MigrationCenterPreferenceSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig">MigrationCenterPreferenceSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig">MigrationCenterPreferenceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putVirtualMachinePreferences">putVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetVirtualMachinePreferences">resetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putTimeouts"></a>

```typescript
public putTimeouts(value: MigrationCenterPreferenceSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a>

---

##### `putVirtualMachinePreferences` <a name="putVirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putVirtualMachinePreferences"></a>

```typescript
public putVirtualMachinePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.putVirtualMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVirtualMachinePreferences` <a name="resetVirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.resetVirtualMachinePreferences"></a>

```typescript
public resetVirtualMachinePreferences(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isConstruct"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformElement"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformResource"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MigrationCenterPreferenceSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MigrationCenterPreferenceSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MigrationCenterPreferenceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MigrationCenterPreferenceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference">MigrationCenterPreferenceSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferences">virtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetIdInput">preferenceSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferencesInput">virtualMachinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetId">preferenceSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterPreferenceSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference">MigrationCenterPreferenceSetTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `virtualMachinePreferences`<sup>Required</sup> <a name="virtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferences"></a>

```typescript
public readonly virtualMachinePreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `preferenceSetIdInput`<sup>Optional</sup> <a name="preferenceSetIdInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetIdInput"></a>

```typescript
public readonly preferenceSetIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MigrationCenterPreferenceSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a>

---

##### `virtualMachinePreferencesInput`<sup>Optional</sup> <a name="virtualMachinePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.virtualMachinePreferencesInput"></a>

```typescript
public readonly virtualMachinePreferencesInput: MigrationCenterPreferenceSetVirtualMachinePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `preferenceSetId`<sup>Required</sup> <a name="preferenceSetId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.preferenceSetId"></a>

```typescript
public readonly preferenceSetId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterPreferenceSetConfig <a name="MigrationCenterPreferenceSetConfig" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetConfig: migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.location">location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.preferenceSetId">preferenceSetId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.description">description</a></code> | <code>string</code> | A description of the preference set. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.displayName">displayName</a></code> | <code>string</code> | User-friendly display name. Maximum length is 63 characters. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#id MigrationCenterPreferenceSet#id}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#project MigrationCenterPreferenceSet#project}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.virtualMachinePreferences">virtualMachinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | virtual_machine_preferences block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#location MigrationCenterPreferenceSet#location}

---

##### `preferenceSetId`<sup>Required</sup> <a name="preferenceSetId" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.preferenceSetId"></a>

```typescript
public readonly preferenceSetId: string;
```

- *Type:* string

Required.

User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression '[a-z]([a-z0-9-]{0,61}[a-z0-9])?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#preference_set_id MigrationCenterPreferenceSet#preference_set_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the preference set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#description MigrationCenterPreferenceSet#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-friendly display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#display_name MigrationCenterPreferenceSet#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#id MigrationCenterPreferenceSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#project MigrationCenterPreferenceSet#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MigrationCenterPreferenceSetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#timeouts MigrationCenterPreferenceSet#timeouts}

---

##### `virtualMachinePreferences`<sup>Optional</sup> <a name="virtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetConfig.property.virtualMachinePreferences"></a>

```typescript
public readonly virtualMachinePreferences: MigrationCenterPreferenceSetVirtualMachinePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

virtual_machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#virtual_machine_preferences MigrationCenterPreferenceSet#virtual_machine_preferences}

---

### MigrationCenterPreferenceSetTimeouts <a name="MigrationCenterPreferenceSetTimeouts" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetTimeouts: migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#create MigrationCenterPreferenceSet#create}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#delete MigrationCenterPreferenceSet#delete}. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#update MigrationCenterPreferenceSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#create MigrationCenterPreferenceSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#delete MigrationCenterPreferenceSet#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#update MigrationCenterPreferenceSet#update}.

---

### MigrationCenterPreferenceSetVirtualMachinePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferences: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences">computeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | compute_engine_preferences block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences">regionPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | region_preferences block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy">sizingOptimizationStrategy</a></code> | <code>string</code> | Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences">soleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | sole_tenancy_preferences block. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct">targetProduct</a></code> | <code>string</code> | Target product for assets using this preference set. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences">vmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | vmware_engine_preferences block. |

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'COMMITMENT_PLAN_NONE', 'COMMITMENT_PLAN_ONE_YEAR', 'COMMITMENT_PLAN_THREE_YEARS'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}

---

##### `computeEnginePreferences`<sup>Optional</sup> <a name="computeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.computeEnginePreferences"></a>

```typescript
public readonly computeEnginePreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

compute_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#compute_engine_preferences MigrationCenterPreferenceSet#compute_engine_preferences}

---

##### `regionPreferences`<sup>Optional</sup> <a name="regionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.regionPreferences"></a>

```typescript
public readonly regionPreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

region_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#region_preferences MigrationCenterPreferenceSet#region_preferences}

---

##### `sizingOptimizationStrategy`<sup>Optional</sup> <a name="sizingOptimizationStrategy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.sizingOptimizationStrategy"></a>

```typescript
public readonly sizingOptimizationStrategy: string;
```

- *Type:* string

Sizing optimization strategy specifies the preferred strategy used when extrapolating usage data to calculate insights and recommendations for a virtual machine.

If you are unsure which value to set, a moderate sizing optimization strategy is often a good value to start with. Possible values: 'SIZING_OPTIMIZATION_STRATEGY_UNSPECIFIED', 'SIZING_OPTIMIZATION_STRATEGY_SAME_AS_SOURCE', 'SIZING_OPTIMIZATION_STRATEGY_MODERATE', 'SIZING_OPTIMIZATION_STRATEGY_AGGRESSIVE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#sizing_optimization_strategy MigrationCenterPreferenceSet#sizing_optimization_strategy}

---

##### `soleTenancyPreferences`<sup>Optional</sup> <a name="soleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.soleTenancyPreferences"></a>

```typescript
public readonly soleTenancyPreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

sole_tenancy_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#sole_tenancy_preferences MigrationCenterPreferenceSet#sole_tenancy_preferences}

---

##### `targetProduct`<sup>Optional</sup> <a name="targetProduct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.targetProduct"></a>

```typescript
public readonly targetProduct: string;
```

- *Type:* string

Target product for assets using this preference set.

Specify either target product or business goal, but not both. Possible values: 'COMPUTE_MIGRATION_TARGET_PRODUCT_UNSPECIFIED', 'COMPUTE_MIGRATION_TARGET_PRODUCT_COMPUTE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_VMWARE_ENGINE', 'COMPUTE_MIGRATION_TARGET_PRODUCT_SOLE_TENANCY'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#target_product MigrationCenterPreferenceSet#target_product}

---

##### `vmwareEnginePreferences`<sup>Optional</sup> <a name="vmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences.property.vmwareEnginePreferences"></a>

```typescript
public readonly vmwareEnginePreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

vmware_engine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#vmware_engine_preferences MigrationCenterPreferenceSet#vmware_engine_preferences}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType">licenseType</a></code> | <code>string</code> | License type to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences">machinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | machine_preferences block. |

---

##### `licenseType`<sup>Optional</sup> <a name="licenseType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

License type to consider when calculating costs for virtual machine insights and recommendations.

If unspecified, costs are calculated based on the default licensing plan. Possible values: 'LICENSE_TYPE_UNSPECIFIED', 'LICENSE_TYPE_DEFAULT', 'LICENSE_TYPE_BRING_YOUR_OWN_LICENSE'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#license_type MigrationCenterPreferenceSet#license_type}

---

##### `machinePreferences`<sup>Optional</sup> <a name="machinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences.property.machinePreferences"></a>

```typescript
public readonly machinePreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

machine_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#machine_preferences MigrationCenterPreferenceSet#machine_preferences}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries">allowedMachineSeries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>[]</code> | allowed_machine_series block. |

---

##### `allowedMachineSeries`<sup>Optional</sup> <a name="allowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences.property.allowedMachineSeries"></a>

```typescript
public readonly allowedMachineSeries: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>[]

allowed_machine_series block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#allowed_machine_series MigrationCenterPreferenceSet#allowed_machine_series}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code">code</a></code> | <code>string</code> | Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#code MigrationCenterPreferenceSet#code}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions">preferredRegions</a></code> | <code>string[]</code> | A list of preferred regions, ordered by the most preferred region first. |

---

##### `preferredRegions`<sup>Optional</sup> <a name="preferredRegions" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences.property.preferredRegions"></a>

```typescript
public readonly preferredRegions: string[];
```

- *Type:* string[]

A list of preferred regions, ordered by the most preferred region first.

Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#preferred_regions MigrationCenterPreferenceSet#preferred_regions}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>number</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy">hostMaintenancePolicy</a></code> | <code>string</code> | Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes">nodeTypes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>[]</code> | node_types block. |

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR', 'COMMITMENT_3_YEAR'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}

---

##### `cpuOvercommitRatio`<sup>Optional</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.cpuOvercommitRatio"></a>

```typescript
public readonly cpuOvercommitRatio: number;
```

- *Type:* number

CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#cpu_overcommit_ratio MigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `hostMaintenancePolicy`<sup>Optional</sup> <a name="hostMaintenancePolicy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.hostMaintenancePolicy"></a>

```typescript
public readonly hostMaintenancePolicy: string;
```

- *Type:* string

Sole Tenancy nodes maintenance policy. Possible values: 'HOST_MAINTENANCE_POLICY_UNSPECIFIED', 'HOST_MAINTENANCE_POLICY_DEFAULT', 'HOST_MAINTENANCE_POLICY_RESTART_IN_PLACE', 'HOST_MAINTENANCE_POLICY_MIGRATE_WITHIN_NODE_GROUP'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#host_maintenance_policy MigrationCenterPreferenceSet#host_maintenance_policy}

---

##### `nodeTypes`<sup>Optional</sup> <a name="nodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences.property.nodeTypes"></a>

```typescript
public readonly nodeTypes: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>[]

node_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#node_types MigrationCenterPreferenceSet#node_types}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName">nodeName</a></code> | <code>string</code> | Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes. |

---

##### `nodeName`<sup>Optional</sup> <a name="nodeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

Name of the Sole Tenant node. Consult https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#node_name MigrationCenterPreferenceSet#node_name}

---

### MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

const migrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences: migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | Commitment plan to consider when calculating costs for virtual machine insights and recommendations. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>number</code> | CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio">memoryOvercommitRatio</a></code> | <code>number</code> | Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio">storageDeduplicationCompressionRatio</a></code> | <code>number</code> | The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. |

---

##### `commitmentPlan`<sup>Optional</sup> <a name="commitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

Commitment plan to consider when calculating costs for virtual machine insights and recommendations.

If you are unsure which value to set, a 3 year commitment plan is often a good value to start with. Possible values: 'COMMITMENT_PLAN_UNSPECIFIED', 'ON_DEMAND', 'COMMITMENT_1_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_3_YEAR_MONTHLY_PAYMENTS', 'COMMITMENT_1_YEAR_UPFRONT_PAYMENT', 'COMMITMENT_3_YEAR_UPFRONT_PAYMENT',

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#commitment_plan MigrationCenterPreferenceSet#commitment_plan}

---

##### `cpuOvercommitRatio`<sup>Optional</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.cpuOvercommitRatio"></a>

```typescript
public readonly cpuOvercommitRatio: number;
```

- *Type:* number

CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#cpu_overcommit_ratio MigrationCenterPreferenceSet#cpu_overcommit_ratio}

---

##### `memoryOvercommitRatio`<sup>Optional</sup> <a name="memoryOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.memoryOvercommitRatio"></a>

```typescript
public readonly memoryOvercommitRatio: number;
```

- *Type:* number

Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#memory_overcommit_ratio MigrationCenterPreferenceSet#memory_overcommit_ratio}

---

##### `storageDeduplicationCompressionRatio`<sup>Optional</sup> <a name="storageDeduplicationCompressionRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences.property.storageDeduplicationCompressionRatio"></a>

```typescript
public readonly storageDeduplicationCompressionRatio: number;
```

- *Type:* number

The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression.

Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/migration_center_preference_set#storage_deduplication_compression_ratio MigrationCenterPreferenceSet#storage_deduplication_compression_ratio}

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterPreferenceSetTimeoutsOutputReference <a name="MigrationCenterPreferenceSetTimeoutsOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterPreferenceSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetTimeouts">MigrationCenterPreferenceSetTimeouts</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get"></a>

```typescript
public get(index: number): MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>[]

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode">resetCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCode` <a name="resetCode" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.resetCode"></a>

```typescript
public resetCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries">putAllowedMachineSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries">resetAllowedMachineSeries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedMachineSeries` <a name="putAllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries"></a>

```typescript
public putAllowedMachineSeries(value: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.putAllowedMachineSeries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>[]

---

##### `resetAllowedMachineSeries` <a name="resetAllowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.resetAllowedMachineSeries"></a>

```typescript
public resetAllowedMachineSeries(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries">allowedMachineSeries</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput">allowedMachineSeriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedMachineSeries`<sup>Required</sup> <a name="allowedMachineSeries" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeries"></a>

```typescript
public readonly allowedMachineSeries: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList</a>

---

##### `allowedMachineSeriesInput`<sup>Optional</sup> <a name="allowedMachineSeriesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.allowedMachineSeriesInput"></a>

```typescript
public readonly allowedMachineSeriesInput: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences">putMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType">resetLicenseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences">resetMachinePreferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMachinePreferences` <a name="putMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences"></a>

```typescript
public putMachinePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.putMachinePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `resetLicenseType` <a name="resetLicenseType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetLicenseType"></a>

```typescript
public resetLicenseType(): void
```

##### `resetMachinePreferences` <a name="resetMachinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.resetMachinePreferences"></a>

```typescript
public resetMachinePreferences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences">machinePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput">licenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput">machinePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType">licenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machinePreferences`<sup>Required</sup> <a name="machinePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferences"></a>

```typescript
public readonly machinePreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference</a>

---

##### `licenseTypeInput`<sup>Optional</sup> <a name="licenseTypeInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseTypeInput"></a>

```typescript
public readonly licenseTypeInput: string;
```

- *Type:* string

---

##### `machinePreferencesInput`<sup>Optional</sup> <a name="machinePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.machinePreferencesInput"></a>

```typescript
public readonly machinePreferencesInput: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesMachinePreferences</a>

---

##### `licenseType`<sup>Required</sup> <a name="licenseType" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.licenseType"></a>

```typescript
public readonly licenseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences">putComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences">putRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences">putSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences">putVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences">resetComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences">resetRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy">resetSizingOptimizationStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences">resetSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct">resetTargetProduct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences">resetVmwareEnginePreferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComputeEnginePreferences` <a name="putComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences"></a>

```typescript
public putComputeEnginePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putComputeEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `putRegionPreferences` <a name="putRegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences"></a>

```typescript
public putRegionPreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putRegionPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `putSoleTenancyPreferences` <a name="putSoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences"></a>

```typescript
public putSoleTenancyPreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putSoleTenancyPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `putVmwareEnginePreferences` <a name="putVmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences"></a>

```typescript
public putVmwareEnginePreferences(value: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.putVmwareEnginePreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetCommitmentPlan"></a>

```typescript
public resetCommitmentPlan(): void
```

##### `resetComputeEnginePreferences` <a name="resetComputeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetComputeEnginePreferences"></a>

```typescript
public resetComputeEnginePreferences(): void
```

##### `resetRegionPreferences` <a name="resetRegionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetRegionPreferences"></a>

```typescript
public resetRegionPreferences(): void
```

##### `resetSizingOptimizationStrategy` <a name="resetSizingOptimizationStrategy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSizingOptimizationStrategy"></a>

```typescript
public resetSizingOptimizationStrategy(): void
```

##### `resetSoleTenancyPreferences` <a name="resetSoleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetSoleTenancyPreferences"></a>

```typescript
public resetSoleTenancyPreferences(): void
```

##### `resetTargetProduct` <a name="resetTargetProduct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetTargetProduct"></a>

```typescript
public resetTargetProduct(): void
```

##### `resetVmwareEnginePreferences` <a name="resetVmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.resetVmwareEnginePreferences"></a>

```typescript
public resetVmwareEnginePreferences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences">computeEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences">regionPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences">soleTenancyPreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences">vmwareEnginePreferences</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput">computeEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput">regionPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput">sizingOptimizationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput">soleTenancyPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput">targetProductInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput">vmwareEnginePreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy">sizingOptimizationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct">targetProduct</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeEnginePreferences`<sup>Required</sup> <a name="computeEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferences"></a>

```typescript
public readonly computeEnginePreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferencesOutputReference</a>

---

##### `regionPreferences`<sup>Required</sup> <a name="regionPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferences"></a>

```typescript
public readonly regionPreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference</a>

---

##### `soleTenancyPreferences`<sup>Required</sup> <a name="soleTenancyPreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferences"></a>

```typescript
public readonly soleTenancyPreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference</a>

---

##### `vmwareEnginePreferences`<sup>Required</sup> <a name="vmwareEnginePreferences" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferences"></a>

```typescript
public readonly vmwareEnginePreferences: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference</a>

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlanInput"></a>

```typescript
public readonly commitmentPlanInput: string;
```

- *Type:* string

---

##### `computeEnginePreferencesInput`<sup>Optional</sup> <a name="computeEnginePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.computeEnginePreferencesInput"></a>

```typescript
public readonly computeEnginePreferencesInput: MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesComputeEnginePreferences</a>

---

##### `regionPreferencesInput`<sup>Optional</sup> <a name="regionPreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.regionPreferencesInput"></a>

```typescript
public readonly regionPreferencesInput: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---

##### `sizingOptimizationStrategyInput`<sup>Optional</sup> <a name="sizingOptimizationStrategyInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategyInput"></a>

```typescript
public readonly sizingOptimizationStrategyInput: string;
```

- *Type:* string

---

##### `soleTenancyPreferencesInput`<sup>Optional</sup> <a name="soleTenancyPreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.soleTenancyPreferencesInput"></a>

```typescript
public readonly soleTenancyPreferencesInput: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---

##### `targetProductInput`<sup>Optional</sup> <a name="targetProductInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProductInput"></a>

```typescript
public readonly targetProductInput: string;
```

- *Type:* string

---

##### `vmwareEnginePreferencesInput`<sup>Optional</sup> <a name="vmwareEnginePreferencesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.vmwareEnginePreferencesInput"></a>

```typescript
public readonly vmwareEnginePreferencesInput: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

---

##### `sizingOptimizationStrategy`<sup>Required</sup> <a name="sizingOptimizationStrategy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.sizingOptimizationStrategy"></a>

```typescript
public readonly sizingOptimizationStrategy: string;
```

- *Type:* string

---

##### `targetProduct`<sup>Required</sup> <a name="targetProduct" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.targetProduct"></a>

```typescript
public readonly targetProduct: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterPreferenceSetVirtualMachinePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferences">MigrationCenterPreferenceSetVirtualMachinePreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions">resetPreferredRegions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredRegions` <a name="resetPreferredRegions" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.resetPreferredRegions"></a>

```typescript
public resetPreferredRegions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput">preferredRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions">preferredRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `preferredRegionsInput`<sup>Optional</sup> <a name="preferredRegionsInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegionsInput"></a>

```typescript
public readonly preferredRegionsInput: string[];
```

- *Type:* string[]

---

##### `preferredRegions`<sup>Required</sup> <a name="preferredRegions" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.preferredRegions"></a>

```typescript
public readonly preferredRegions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesRegionPreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get"></a>

```typescript
public get(index: number): MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>[]

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName">resetNodeName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNodeName` <a name="resetNodeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.resetNodeName"></a>

```typescript
public resetNodeName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput">nodeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName">nodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeNameInput`<sup>Optional</sup> <a name="nodeNameInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeNameInput"></a>

```typescript
public readonly nodeNameInput: string;
```

- *Type:* string

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes">putNodeTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio">resetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy">resetHostMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes">resetNodeTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeTypes` <a name="putNodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes"></a>

```typescript
public putNodeTypes(value: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.putNodeTypes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>[]

---

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCommitmentPlan"></a>

```typescript
public resetCommitmentPlan(): void
```

##### `resetCpuOvercommitRatio` <a name="resetCpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetCpuOvercommitRatio"></a>

```typescript
public resetCpuOvercommitRatio(): void
```

##### `resetHostMaintenancePolicy` <a name="resetHostMaintenancePolicy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetHostMaintenancePolicy"></a>

```typescript
public resetHostMaintenancePolicy(): void
```

##### `resetNodeTypes` <a name="resetNodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.resetNodeTypes"></a>

```typescript
public resetNodeTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes">nodeTypes</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput">cpuOvercommitRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput">hostMaintenancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput">nodeTypesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy">hostMaintenancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nodeTypes`<sup>Required</sup> <a name="nodeTypes" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypes"></a>

```typescript
public readonly nodeTypes: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypesList</a>

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlanInput"></a>

```typescript
public readonly commitmentPlanInput: string;
```

- *Type:* string

---

##### `cpuOvercommitRatioInput`<sup>Optional</sup> <a name="cpuOvercommitRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```typescript
public readonly cpuOvercommitRatioInput: number;
```

- *Type:* number

---

##### `hostMaintenancePolicyInput`<sup>Optional</sup> <a name="hostMaintenancePolicyInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicyInput"></a>

```typescript
public readonly hostMaintenancePolicyInput: string;
```

- *Type:* string

---

##### `nodeTypesInput`<sup>Optional</sup> <a name="nodeTypesInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.nodeTypesInput"></a>

```typescript
public readonly nodeTypesInput: IResolvable | MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesNodeTypes</a>[]

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

---

##### `cpuOvercommitRatio`<sup>Required</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.cpuOvercommitRatio"></a>

```typescript
public readonly cpuOvercommitRatio: number;
```

- *Type:* number

---

##### `hostMaintenancePolicy`<sup>Required</sup> <a name="hostMaintenancePolicy" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.hostMaintenancePolicy"></a>

```typescript
public readonly hostMaintenancePolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesSoleTenancyPreferences</a>

---


### MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference <a name="MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer"></a>

```typescript
import { migrationCenterPreferenceSet } from '@cdktf/provider-google'

new migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan">resetCommitmentPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio">resetCpuOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio">resetMemoryOvercommitRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio">resetStorageDeduplicationCompressionRatio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCommitmentPlan` <a name="resetCommitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCommitmentPlan"></a>

```typescript
public resetCommitmentPlan(): void
```

##### `resetCpuOvercommitRatio` <a name="resetCpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetCpuOvercommitRatio"></a>

```typescript
public resetCpuOvercommitRatio(): void
```

##### `resetMemoryOvercommitRatio` <a name="resetMemoryOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetMemoryOvercommitRatio"></a>

```typescript
public resetMemoryOvercommitRatio(): void
```

##### `resetStorageDeduplicationCompressionRatio` <a name="resetStorageDeduplicationCompressionRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.resetStorageDeduplicationCompressionRatio"></a>

```typescript
public resetStorageDeduplicationCompressionRatio(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput">commitmentPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput">cpuOvercommitRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput">memoryOvercommitRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput">storageDeduplicationCompressionRatioInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan">commitmentPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio">cpuOvercommitRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio">memoryOvercommitRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio">storageDeduplicationCompressionRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitmentPlanInput`<sup>Optional</sup> <a name="commitmentPlanInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlanInput"></a>

```typescript
public readonly commitmentPlanInput: string;
```

- *Type:* string

---

##### `cpuOvercommitRatioInput`<sup>Optional</sup> <a name="cpuOvercommitRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatioInput"></a>

```typescript
public readonly cpuOvercommitRatioInput: number;
```

- *Type:* number

---

##### `memoryOvercommitRatioInput`<sup>Optional</sup> <a name="memoryOvercommitRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatioInput"></a>

```typescript
public readonly memoryOvercommitRatioInput: number;
```

- *Type:* number

---

##### `storageDeduplicationCompressionRatioInput`<sup>Optional</sup> <a name="storageDeduplicationCompressionRatioInput" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatioInput"></a>

```typescript
public readonly storageDeduplicationCompressionRatioInput: number;
```

- *Type:* number

---

##### `commitmentPlan`<sup>Required</sup> <a name="commitmentPlan" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.commitmentPlan"></a>

```typescript
public readonly commitmentPlan: string;
```

- *Type:* string

---

##### `cpuOvercommitRatio`<sup>Required</sup> <a name="cpuOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.cpuOvercommitRatio"></a>

```typescript
public readonly cpuOvercommitRatio: number;
```

- *Type:* number

---

##### `memoryOvercommitRatio`<sup>Required</sup> <a name="memoryOvercommitRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.memoryOvercommitRatio"></a>

```typescript
public readonly memoryOvercommitRatio: number;
```

- *Type:* number

---

##### `storageDeduplicationCompressionRatio`<sup>Required</sup> <a name="storageDeduplicationCompressionRatio" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.storageDeduplicationCompressionRatio"></a>

```typescript
public readonly storageDeduplicationCompressionRatio: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences;
```

- *Type:* <a href="#@cdktf/provider-google.migrationCenterPreferenceSet.MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences">MigrationCenterPreferenceSetVirtualMachinePreferencesVmwareEnginePreferences</a>

---



