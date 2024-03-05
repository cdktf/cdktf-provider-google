# `eventarcTrigger` Submodule <a name="`eventarcTrigger` Submodule" id="@cdktf/provider-google.eventarcTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcTrigger <a name="EventarcTrigger" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger google_eventarc_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTrigger(scope: Construct, id: string, config: EventarcTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig">EventarcTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig">EventarcTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria">putMatchingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport">putTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType">resetEventDataContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport">resetTransport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestination` <a name="putDestination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination"></a>

```typescript
public putDestination(value: EventarcTriggerDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---

##### `putMatchingCriteria` <a name="putMatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria"></a>

```typescript
public putMatchingCriteria(value: IResolvable | EventarcTriggerMatchingCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putMatchingCriteria.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts"></a>

```typescript
public putTimeouts(value: EventarcTriggerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

---

##### `putTransport` <a name="putTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport"></a>

```typescript
public putTransport(value: EventarcTriggerTransport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.putTransport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetEventDataContentType` <a name="resetEventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetEventDataContentType"></a>

```typescript
public resetEventDataContentType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransport` <a name="resetTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.resetTransport"></a>

```typescript
public resetTransport(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

eventarcTrigger.EventarcTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

eventarcTrigger.EventarcTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

eventarcTrigger.EventarcTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

eventarcTrigger.EventarcTrigger.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventarcTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventarcTrigger to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventarcTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions">conditions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria">matchingCriteria</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput">destinationInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput">eventDataContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput">matchingCriteriaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput">transportInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType">eventDataContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.conditions"></a>

```typescript
public readonly conditions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destination"></a>

```typescript
public readonly destination: EventarcTriggerDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference">EventarcTriggerDestinationOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `matchingCriteria`<sup>Required</sup> <a name="matchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteria"></a>

```typescript
public readonly matchingCriteria: EventarcTriggerMatchingCriteriaList;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList">EventarcTriggerMatchingCriteriaList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcTriggerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference">EventarcTriggerTimeoutsOutputReference</a>

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transport"></a>

```typescript
public readonly transport: EventarcTriggerTransportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference">EventarcTriggerTransportOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.destinationInput"></a>

```typescript
public readonly destinationInput: EventarcTriggerDestination;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---

##### `eventDataContentTypeInput`<sup>Optional</sup> <a name="eventDataContentTypeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentTypeInput"></a>

```typescript
public readonly eventDataContentTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `matchingCriteriaInput`<sup>Optional</sup> <a name="matchingCriteriaInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.matchingCriteriaInput"></a>

```typescript
public readonly matchingCriteriaInput: IResolvable | EventarcTriggerMatchingCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventarcTriggerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.transportInput"></a>

```typescript
public readonly transportInput: EventarcTriggerTransport;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `eventDataContentType`<sup>Required</sup> <a name="eventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.eventDataContentType"></a>

```typescript
public readonly eventDataContentType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcTrigger.EventarcTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcTriggerConfig <a name="EventarcTriggerConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerConfig: eventarcTrigger.EventarcTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination">destination</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | destination block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria">matchingCriteria</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>[]</code> | matching_criteria block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name">name</a></code> | <code>string</code> | Required. The resource name of the trigger. Must be unique within the location on the project. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel">channel</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType">eventDataContentType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Optional. User labels attached to the triggers that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project">project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport">transport</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | transport block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.destination"></a>

```typescript
public readonly destination: EventarcTriggerDestination;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#destination EventarcTrigger#destination}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `matchingCriteria`<sup>Required</sup> <a name="matchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.matchingCriteria"></a>

```typescript
public readonly matchingCriteria: IResolvable | EventarcTriggerMatchingCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>[]

matching_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#matching_criteria EventarcTrigger#matching_criteria}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Required. The resource name of the trigger. Must be unique within the location on the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#name EventarcTrigger#name}

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

Optional.

The name of the channel associated with the trigger in `projects/{project}/locations/{location}/channels/{channel}` format. You must provide a channel to receive events from Eventarc SaaS partners.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#channel EventarcTrigger#channel}

---

##### `eventDataContentType`<sup>Optional</sup> <a name="eventDataContentType" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.eventDataContentType"></a>

```typescript
public readonly eventDataContentType: string;
```

- *Type:* string

Optional.

EventDataContentType specifies the type of payload in MIME format that is expected from the CloudEvent data field. This is set to `application/json` if the value is not defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#event_data_content_type EventarcTrigger#event_data_content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#id EventarcTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Optional. User labels attached to the triggers that can be used to group resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#labels EventarcTrigger#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#project EventarcTrigger#project}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Optional.

The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#service_account EventarcTrigger#service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcTriggerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#timeouts EventarcTrigger#timeouts}

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerConfig.property.transport"></a>

```typescript
public readonly transport: EventarcTriggerTransport;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

transport block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#transport EventarcTrigger#transport}

---

### EventarcTriggerDestination <a name="EventarcTriggerDestination" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerDestination: eventarcTrigger.EventarcTriggerDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService">cloudRunService</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | cloud_run_service block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | gke block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow">workflow</a></code> | <code>string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `cloudRunService`<sup>Optional</sup> <a name="cloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.cloudRunService"></a>

```typescript
public readonly cloudRunService: EventarcTriggerDestinationCloudRunService;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

cloud_run_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#cloud_run_service EventarcTrigger#cloud_run_service}

---

##### `gke`<sup>Optional</sup> <a name="gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.gke"></a>

```typescript
public readonly gke: EventarcTriggerDestinationGke;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

gke block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#gke EventarcTrigger#gke}

---

##### `httpEndpoint`<sup>Optional</sup> <a name="httpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: EventarcTriggerDestinationHttpEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#http_endpoint EventarcTrigger#http_endpoint}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.networkConfig"></a>

```typescript
public readonly networkConfig: EventarcTriggerDestinationNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#network_config EventarcTrigger#network_config}

---

##### `workflow`<sup>Optional</sup> <a name="workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same project as the trigger. Format: `projects/{project}/locations/{location}/workflows/{workflow}`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#workflow EventarcTrigger#workflow}

---

### EventarcTriggerDestinationCloudRunService <a name="EventarcTriggerDestinationCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerDestinationCloudRunService: eventarcTrigger.EventarcTriggerDestinationCloudRunService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service">service</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path">path</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region">region</a></code> | <code>string</code> | Required. The region the Cloud Run service is deployed in. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required.

The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Optional.

The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Required. The region the Cloud Run service is deployed in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#region EventarcTrigger#region}

---

### EventarcTriggerDestinationGke <a name="EventarcTriggerDestinationGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerDestinationGke: eventarcTrigger.EventarcTriggerDestinationGke = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster">cluster</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location">location</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace">namespace</a></code> | <code>string</code> | Required. The namespace the GKE service is running in. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service">service</a></code> | <code>string</code> | Required. Name of the GKE service. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path">path</a></code> | <code>string</code> | Optional. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

Required.

The name of the cluster the GKE service is running in. The cluster must be running in the same project as the trigger being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#cluster EventarcTrigger#cluster}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Required.

The name of the Google Compute Engine in which the cluster resides, which can either be compute zone (for example, us-central1-a) for the zonal clusters or region (for example, us-central1) for regional clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#location EventarcTrigger#location}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Required. The namespace the GKE service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#namespace EventarcTrigger#namespace}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Required. Name of the GKE service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#service EventarcTrigger#service}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Optional.

The relative path on the GKE service the events should be sent to. The value must conform to the definition of a URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#path EventarcTrigger#path}

---

### EventarcTriggerDestinationHttpEndpoint <a name="EventarcTriggerDestinationHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerDestinationHttpEndpoint: eventarcTrigger.EventarcTriggerDestinationHttpEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.property.uri">uri</a></code> | <code>string</code> | Required. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Required.

The URI of the HTTP enpdoint. The value must be a RFC2396 URI string. Examples: `http://10.10.10.8:80/route`, `http://svc.us-central1.p.local:8080/`. Only HTTP and HTTPS protocols are supported. The host can be either a static IP addressable from the VPC specified by the network config, or an internal DNS hostname of the service resolvable via Cloud DNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#uri EventarcTrigger#uri}

---

### EventarcTriggerDestinationNetworkConfig <a name="EventarcTriggerDestinationNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerDestinationNetworkConfig: eventarcTrigger.EventarcTriggerDestinationNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`. |

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

Required. Name of the NetworkAttachment that allows access to the destination VPC. Format: `projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#network_attachment EventarcTrigger#network_attachment}

---

### EventarcTriggerMatchingCriteria <a name="EventarcTriggerMatchingCriteria" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerMatchingCriteria: eventarcTrigger.EventarcTriggerMatchingCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute">attribute</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value">value</a></code> | <code>string</code> | Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator">operator</a></code> | <code>string</code> | Optional. |

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

Required.

The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#attribute EventarcTrigger#attribute}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Required. The value for the attribute. See https://cloud.google.com/eventarc/docs/creating-triggers#trigger-gcloud for available values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#value EventarcTrigger#value}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Optional.

The operator used for matching the events with the value of the filter. If not specified, only events that have an exact key-value pair specified in the filter are matched. The only allowed value is `match-path-pattern`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#operator EventarcTrigger#operator}

---

### EventarcTriggerTimeouts <a name="EventarcTriggerTimeouts" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerTimeouts: eventarcTrigger.EventarcTriggerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#create EventarcTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#delete EventarcTrigger#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#update EventarcTrigger#update}.

---

### EventarcTriggerTransport <a name="EventarcTriggerTransport" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerTransport: eventarcTrigger.EventarcTriggerTransport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | pubsub block. |

---

##### `pubsub`<sup>Optional</sup> <a name="pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport.property.pubsub"></a>

```typescript
public readonly pubsub: EventarcTriggerTransportPubsub;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#pubsub EventarcTrigger#pubsub}

---

### EventarcTriggerTransportPubsub <a name="EventarcTriggerTransportPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

const eventarcTriggerTransportPubsub: eventarcTrigger.EventarcTriggerTransportPubsub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic">topic</a></code> | <code>string</code> | Optional. |

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Optional.

The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME}. You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/eventarc_trigger#topic EventarcTrigger#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcTriggerDestinationCloudRunServiceOutputReference <a name="EventarcTriggerDestinationCloudRunServiceOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcTriggerDestinationCloudRunService;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---


### EventarcTriggerDestinationGkeOutputReference <a name="EventarcTriggerDestinationGkeOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerDestinationGkeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput">clusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.clusterInput"></a>

```typescript
public readonly clusterInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcTriggerDestinationGke;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---


### EventarcTriggerDestinationHttpEndpointOutputReference <a name="EventarcTriggerDestinationHttpEndpointOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcTriggerDestinationHttpEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---


### EventarcTriggerDestinationNetworkConfigOutputReference <a name="EventarcTriggerDestinationNetworkConfigOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput">networkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment">networkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkAttachmentInput`<sup>Optional</sup> <a name="networkAttachmentInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```typescript
public readonly networkAttachmentInput: string;
```

- *Type:* string

---

##### `networkAttachment`<sup>Required</sup> <a name="networkAttachment" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.networkAttachment"></a>

```typescript
public readonly networkAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcTriggerDestinationNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---


### EventarcTriggerDestinationOutputReference <a name="EventarcTriggerDestinationOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService">putCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke">putGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint">putHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService">resetCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke">resetGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetHttpEndpoint">resetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow">resetWorkflow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudRunService` <a name="putCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService"></a>

```typescript
public putCloudRunService(value: EventarcTriggerDestinationCloudRunService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putCloudRunService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---

##### `putGke` <a name="putGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke"></a>

```typescript
public putGke(value: EventarcTriggerDestinationGke): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putGke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---

##### `putHttpEndpoint` <a name="putHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint"></a>

```typescript
public putHttpEndpoint(value: EventarcTriggerDestinationHttpEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: EventarcTriggerDestinationNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---

##### `resetCloudRunService` <a name="resetCloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetCloudRunService"></a>

```typescript
public resetCloudRunService(): void
```

##### `resetGke` <a name="resetGke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetGke"></a>

```typescript
public resetGke(): void
```

##### `resetHttpEndpoint` <a name="resetHttpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetHttpEndpoint"></a>

```typescript
public resetHttpEndpoint(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetWorkflow` <a name="resetWorkflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.resetWorkflow"></a>

```typescript
public resetWorkflow(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction">cloudFunction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService">cloudRunService</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke">gke</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference">EventarcTriggerDestinationHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference">EventarcTriggerDestinationNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput">cloudRunServiceInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput">gkeInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpointInput">httpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput">workflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow">workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudFunction`<sup>Required</sup> <a name="cloudFunction" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudFunction"></a>

```typescript
public readonly cloudFunction: string;
```

- *Type:* string

---

##### `cloudRunService`<sup>Required</sup> <a name="cloudRunService" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunService"></a>

```typescript
public readonly cloudRunService: EventarcTriggerDestinationCloudRunServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunServiceOutputReference">EventarcTriggerDestinationCloudRunServiceOutputReference</a>

---

##### `gke`<sup>Required</sup> <a name="gke" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gke"></a>

```typescript
public readonly gke: EventarcTriggerDestinationGkeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGkeOutputReference">EventarcTriggerDestinationGkeOutputReference</a>

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: EventarcTriggerDestinationHttpEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpointOutputReference">EventarcTriggerDestinationHttpEndpointOutputReference</a>

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfig"></a>

```typescript
public readonly networkConfig: EventarcTriggerDestinationNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfigOutputReference">EventarcTriggerDestinationNetworkConfigOutputReference</a>

---

##### `cloudRunServiceInput`<sup>Optional</sup> <a name="cloudRunServiceInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.cloudRunServiceInput"></a>

```typescript
public readonly cloudRunServiceInput: EventarcTriggerDestinationCloudRunService;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationCloudRunService">EventarcTriggerDestinationCloudRunService</a>

---

##### `gkeInput`<sup>Optional</sup> <a name="gkeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.gkeInput"></a>

```typescript
public readonly gkeInput: EventarcTriggerDestinationGke;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationGke">EventarcTriggerDestinationGke</a>

---

##### `httpEndpointInput`<sup>Optional</sup> <a name="httpEndpointInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.httpEndpointInput"></a>

```typescript
public readonly httpEndpointInput: EventarcTriggerDestinationHttpEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationHttpEndpoint">EventarcTriggerDestinationHttpEndpoint</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: EventarcTriggerDestinationNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationNetworkConfig">EventarcTriggerDestinationNetworkConfig</a>

---

##### `workflowInput`<sup>Optional</sup> <a name="workflowInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflowInput"></a>

```typescript
public readonly workflowInput: string;
```

- *Type:* string

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.workflow"></a>

```typescript
public readonly workflow: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcTriggerDestination;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerDestination">EventarcTriggerDestination</a>

---


### EventarcTriggerMatchingCriteriaList <a name="EventarcTriggerMatchingCriteriaList" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerMatchingCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get"></a>

```typescript
public get(index: number): EventarcTriggerMatchingCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcTriggerMatchingCriteria[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>[]

---


### EventarcTriggerMatchingCriteriaOutputReference <a name="EventarcTriggerMatchingCriteriaOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator">resetOperator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.resetOperator"></a>

```typescript
public resetOperator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput">attributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute">attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributeInput`<sup>Optional</sup> <a name="attributeInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attributeInput"></a>

```typescript
public readonly attributeInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.attribute"></a>

```typescript
public readonly attribute: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcTriggerMatchingCriteria;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerMatchingCriteria">EventarcTriggerMatchingCriteria</a>

---


### EventarcTriggerTimeoutsOutputReference <a name="EventarcTriggerTimeoutsOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcTriggerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTimeouts">EventarcTriggerTimeouts</a>

---


### EventarcTriggerTransportOutputReference <a name="EventarcTriggerTransportOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerTransportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub">putPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub">resetPubsub</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPubsub` <a name="putPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub"></a>

```typescript
public putPubsub(value: EventarcTriggerTransportPubsub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.putPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---

##### `resetPubsub` <a name="resetPubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.resetPubsub"></a>

```typescript
public resetPubsub(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub">pubsub</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput">pubsubInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pubsub`<sup>Required</sup> <a name="pubsub" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsub"></a>

```typescript
public readonly pubsub: EventarcTriggerTransportPubsubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference">EventarcTriggerTransportPubsubOutputReference</a>

---

##### `pubsubInput`<sup>Optional</sup> <a name="pubsubInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.pubsubInput"></a>

```typescript
public readonly pubsubInput: EventarcTriggerTransportPubsub;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcTriggerTransport;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransport">EventarcTriggerTransport</a>

---


### EventarcTriggerTransportPubsubOutputReference <a name="EventarcTriggerTransportPubsubOutputReference" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer"></a>

```typescript
import { eventarcTrigger } from '@cdktf/provider-google'

new eventarcTrigger.EventarcTriggerTransportPubsubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTopic` <a name="resetTopic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription">subscription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.subscription"></a>

```typescript
public readonly subscription: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcTriggerTransportPubsub;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcTrigger.EventarcTriggerTransportPubsub">EventarcTriggerTransportPubsub</a>

---



