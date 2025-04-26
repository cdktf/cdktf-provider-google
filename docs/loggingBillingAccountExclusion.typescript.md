# `loggingBillingAccountExclusion` Submodule <a name="`loggingBillingAccountExclusion` Submodule" id="@cdktf/provider-google.loggingBillingAccountExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingBillingAccountExclusion <a name="LoggingBillingAccountExclusion" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion google_logging_billing_account_exclusion}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer"></a>

```typescript
import { loggingBillingAccountExclusion } from '@cdktf/provider-google'

new loggingBillingAccountExclusion.LoggingBillingAccountExclusion(scope: Construct, id: string, config: LoggingBillingAccountExclusionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig">LoggingBillingAccountExclusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig">LoggingBillingAccountExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LoggingBillingAccountExclusion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isConstruct"></a>

```typescript
import { loggingBillingAccountExclusion } from '@cdktf/provider-google'

loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformElement"></a>

```typescript
import { loggingBillingAccountExclusion } from '@cdktf/provider-google'

loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformResource"></a>

```typescript
import { loggingBillingAccountExclusion } from '@cdktf/provider-google'

loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.generateConfigForImport"></a>

```typescript
import { loggingBillingAccountExclusion } from '@cdktf/provider-google'

loggingBillingAccountExclusion.LoggingBillingAccountExclusion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LoggingBillingAccountExclusion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LoggingBillingAccountExclusion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LoggingBillingAccountExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoggingBillingAccountExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccountInput">billingAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccount">billingAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccountInput`<sup>Optional</sup> <a name="billingAccountInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccountInput"></a>

```typescript
public readonly billingAccountInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingBillingAccountExclusionConfig <a name="LoggingBillingAccountExclusionConfig" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.Initializer"></a>

```typescript
import { loggingBillingAccountExclusion } from '@cdktf/provider-google'

const loggingBillingAccountExclusionConfig: loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.billingAccount">billingAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#billing_account LoggingBillingAccountExclusion#billing_account}. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.filter">filter</a></code> | <code>string</code> | The filter to apply when excluding logs. Only log entries that match the filter are excluded. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.name">name</a></code> | <code>string</code> | The name of the logging exclusion. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.description">description</a></code> | <code>string</code> | A human-readable description. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this exclusion rule should be disabled or not. This defaults to false. |
| <code><a href="#@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#id LoggingBillingAccountExclusion#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `billingAccount`<sup>Required</sup> <a name="billingAccount" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.billingAccount"></a>

```typescript
public readonly billingAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#billing_account LoggingBillingAccountExclusion#billing_account}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter to apply when excluding logs. Only log entries that match the filter are excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#filter LoggingBillingAccountExclusion#filter}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the logging exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#name LoggingBillingAccountExclusion#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#description LoggingBillingAccountExclusion#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this exclusion rule should be disabled or not. This defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#disabled LoggingBillingAccountExclusion#disabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingBillingAccountExclusion.LoggingBillingAccountExclusionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/logging_billing_account_exclusion#id LoggingBillingAccountExclusion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



