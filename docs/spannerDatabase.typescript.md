# `spannerDatabase` Submodule <a name="`spannerDatabase` Submodule" id="@cdktf/provider-google.spannerDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpannerDatabase <a name="SpannerDatabase" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database google_spanner_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

new spannerDatabase.SpannerDatabase(scope: Construct, id: string, config: SpannerDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig">SpannerDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig">SpannerDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDatabaseDialect">resetDatabaseDialect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDdl">resetDdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDefaultTimeZone">resetDefaultTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEnableDropProtection">resetEnableDropProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetVersionRetentionPeriod">resetVersionRetentionPeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: SpannerDatabaseEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: SpannerDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

---

##### `resetDatabaseDialect` <a name="resetDatabaseDialect" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDatabaseDialect"></a>

```typescript
public resetDatabaseDialect(): void
```

##### `resetDdl` <a name="resetDdl" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDdl"></a>

```typescript
public resetDdl(): void
```

##### `resetDefaultTimeZone` <a name="resetDefaultTimeZone" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDefaultTimeZone"></a>

```typescript
public resetDefaultTimeZone(): void
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetDeletionProtection"></a>

```typescript
public resetDeletionProtection(): void
```

##### `resetEnableDropProtection` <a name="resetEnableDropProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEnableDropProtection"></a>

```typescript
public resetEnableDropProtection(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionRetentionPeriod` <a name="resetVersionRetentionPeriod" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.resetVersionRetentionPeriod"></a>

```typescript
public resetVersionRetentionPeriod(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpannerDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isConstruct"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

spannerDatabase.SpannerDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformElement"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

spannerDatabase.SpannerDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformResource"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

spannerDatabase.SpannerDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

spannerDatabase.SpannerDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpannerDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpannerDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpannerDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpannerDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference">SpannerDatabaseEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference">SpannerDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialectInput">databaseDialectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddlInput">ddlInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.defaultTimeZoneInput">defaultTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtectionInput">enableDropProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriodInput">versionRetentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialect">databaseDialect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddl">ddl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.defaultTimeZone">defaultTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtection">enableDropProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: SpannerDatabaseEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference">SpannerDatabaseEncryptionConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: SpannerDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference">SpannerDatabaseTimeoutsOutputReference</a>

---

##### `databaseDialectInput`<sup>Optional</sup> <a name="databaseDialectInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialectInput"></a>

```typescript
public readonly databaseDialectInput: string;
```

- *Type:* string

---

##### `ddlInput`<sup>Optional</sup> <a name="ddlInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddlInput"></a>

```typescript
public readonly ddlInput: string[];
```

- *Type:* string[]

---

##### `defaultTimeZoneInput`<sup>Optional</sup> <a name="defaultTimeZoneInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.defaultTimeZoneInput"></a>

```typescript
public readonly defaultTimeZoneInput: string;
```

- *Type:* string

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtectionInput"></a>

```typescript
public readonly deletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDropProtectionInput`<sup>Optional</sup> <a name="enableDropProtectionInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtectionInput"></a>

```typescript
public readonly enableDropProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: SpannerDatabaseEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpannerDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

---

##### `versionRetentionPeriodInput`<sup>Optional</sup> <a name="versionRetentionPeriodInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriodInput"></a>

```typescript
public readonly versionRetentionPeriodInput: string;
```

- *Type:* string

---

##### `databaseDialect`<sup>Required</sup> <a name="databaseDialect" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.databaseDialect"></a>

```typescript
public readonly databaseDialect: string;
```

- *Type:* string

---

##### `ddl`<sup>Required</sup> <a name="ddl" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.ddl"></a>

```typescript
public readonly ddl: string[];
```

- *Type:* string[]

---

##### `defaultTimeZone`<sup>Required</sup> <a name="defaultTimeZone" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.defaultTimeZone"></a>

```typescript
public readonly defaultTimeZone: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDropProtection`<sup>Required</sup> <a name="enableDropProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.enableDropProtection"></a>

```typescript
public readonly enableDropProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `versionRetentionPeriod`<sup>Required</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.versionRetentionPeriod"></a>

```typescript
public readonly versionRetentionPeriod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.spannerDatabase.SpannerDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpannerDatabaseConfig <a name="SpannerDatabaseConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.Initializer"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

const spannerDatabaseConfig: spannerDatabase.SpannerDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.instance">instance</a></code> | <code>string</code> | The instance to create the database on. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.name">name</a></code> | <code>string</code> | A unique identifier for the database, which cannot be changed after the instance is created. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.databaseDialect">databaseDialect</a></code> | <code>string</code> | The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"]. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.ddl">ddl</a></code> | <code>string[]</code> | An optional list of DDL statements to run inside the database. Statements can create tables, indexes, etc. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.defaultTimeZone">defaultTimeZone</a></code> | <code>string</code> | The default time zone for the database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.deletionProtection">deletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Terraform will be prevented from destroying the database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.enableDropProtection">enableDropProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether drop protection is enabled for this database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#id SpannerDatabase#id}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#project SpannerDatabase#project}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.versionRetentionPeriod">versionRetentionPeriod</a></code> | <code>string</code> | The retention period for the database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The instance to create the database on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#instance SpannerDatabase#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A unique identifier for the database, which cannot be changed after the instance is created.

Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#name SpannerDatabase#name}

---

##### `databaseDialect`<sup>Optional</sup> <a name="databaseDialect" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.databaseDialect"></a>

```typescript
public readonly databaseDialect: string;
```

- *Type:* string

The dialect of the Cloud Spanner Database. If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#database_dialect SpannerDatabase#database_dialect}

---

##### `ddl`<sup>Optional</sup> <a name="ddl" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.ddl"></a>

```typescript
public readonly ddl: string[];
```

- *Type:* string[]

An optional list of DDL statements to run inside the database. Statements can create tables, indexes, etc.

During creation these statements execute atomically with the creation of the database
and if there is an error in any statement, the database is not created.

Terraform does not perform drift detection on this field and assumes that the values
recorded in state are accurate. Limited updates to this field are supported, and
newly appended DDL statements can be executed in an update. However, modifications
to prior statements will create a plan that marks the resource for recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#ddl SpannerDatabase#ddl}

---

##### `defaultTimeZone`<sup>Optional</sup> <a name="defaultTimeZone" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.defaultTimeZone"></a>

```typescript
public readonly defaultTimeZone: string;
```

- *Type:* string

The default time zone for the database.

The default time zone must be a valid name
from the tz database. Default value is "America/Los_angeles".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#default_time_zone SpannerDatabase#default_time_zone}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Terraform will be prevented from destroying the database.

Defaults to true.
When a'terraform destroy' or 'terraform apply' would delete the database,
the command will fail if this field is not set to false in Terraform state.
When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the database will fail.
When the field is set to false, deleting the database is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#deletion_protection SpannerDatabase#deletion_protection}

---

##### `enableDropProtection`<sup>Optional</sup> <a name="enableDropProtection" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.enableDropProtection"></a>

```typescript
public readonly enableDropProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether drop protection is enabled for this database.

Defaults to false.
Drop protection is different from
the "deletion_protection" attribute in the following ways:
(1) "deletion_protection" only protects the database from deletions in Terraform.
whereas setting “enableDropProtection” to true protects the database from deletions in all interfaces.
(2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the database.
"deletion_protection" attribute does not provide protection against the deletion of the parent instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#enable_drop_protection SpannerDatabase#enable_drop_protection}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: SpannerDatabaseEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#encryption_config SpannerDatabase#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#id SpannerDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#project SpannerDatabase#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpannerDatabaseTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#timeouts SpannerDatabase#timeouts}

---

##### `versionRetentionPeriod`<sup>Optional</sup> <a name="versionRetentionPeriod" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseConfig.property.versionRetentionPeriod"></a>

```typescript
public readonly versionRetentionPeriod: string;
```

- *Type:* string

The retention period for the database.

The retention period must be between 1 hour
and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
If this property is used, you must avoid adding new DDL statements to 'ddl' that
update the database's version_retention_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#version_retention_period SpannerDatabase#version_retention_period}

---

### SpannerDatabaseEncryptionConfig <a name="SpannerDatabaseEncryptionConfig" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.Initializer"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

const spannerDatabaseEncryptionConfig: spannerDatabase.SpannerDatabaseEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Fully qualified name of the KMS key to use to encrypt this database. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.property.kmsKeyNames">kmsKeyNames</a></code> | <code>string[]</code> | Fully qualified name of the KMS keys to use to encrypt this database. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Fully qualified name of the KMS key to use to encrypt this database.

This key must exist
in the same location as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#kms_key_name SpannerDatabase#kms_key_name}

---

##### `kmsKeyNames`<sup>Optional</sup> <a name="kmsKeyNames" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig.property.kmsKeyNames"></a>

```typescript
public readonly kmsKeyNames: string[];
```

- *Type:* string[]

Fully qualified name of the KMS keys to use to encrypt this database.

The keys must exist
in the same locations as the Spanner Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#kms_key_names SpannerDatabase#kms_key_names}

---

### SpannerDatabaseTimeouts <a name="SpannerDatabaseTimeouts" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.Initializer"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

const spannerDatabaseTimeouts: spannerDatabase.SpannerDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#create SpannerDatabase#create}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#delete SpannerDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#update SpannerDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#create SpannerDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#delete SpannerDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/spanner_database#update SpannerDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpannerDatabaseEncryptionConfigOutputReference <a name="SpannerDatabaseEncryptionConfigOutputReference" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

new spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyNames">resetKmsKeyNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetKmsKeyNames` <a name="resetKmsKeyNames" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.resetKmsKeyNames"></a>

```typescript
public resetKmsKeyNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNamesInput">kmsKeyNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames">kmsKeyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyNamesInput`<sup>Optional</sup> <a name="kmsKeyNamesInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNamesInput"></a>

```typescript
public readonly kmsKeyNamesInput: string[];
```

- *Type:* string[]

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `kmsKeyNames`<sup>Required</sup> <a name="kmsKeyNames" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.kmsKeyNames"></a>

```typescript
public readonly kmsKeyNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SpannerDatabaseEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseEncryptionConfig">SpannerDatabaseEncryptionConfig</a>

---


### SpannerDatabaseTimeoutsOutputReference <a name="SpannerDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { spannerDatabase } from '@cdktf/provider-google'

new spannerDatabase.SpannerDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpannerDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.spannerDatabase.SpannerDatabaseTimeouts">SpannerDatabaseTimeouts</a>

---



