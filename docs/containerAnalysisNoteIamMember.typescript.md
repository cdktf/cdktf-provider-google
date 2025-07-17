# `containerAnalysisNoteIamMember` Submodule <a name="`containerAnalysisNoteIamMember` Submodule" id="@cdktf/provider-google.containerAnalysisNoteIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerAnalysisNoteIamMember <a name="ContainerAnalysisNoteIamMember" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member google_container_analysis_note_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

new containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember(scope: Construct, id: string, config: ContainerAnalysisNoteIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig">ContainerAnalysisNoteIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig">ContainerAnalysisNoteIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.putCondition"></a>

```typescript
public putCondition(value: ContainerAnalysisNoteIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerAnalysisNoteIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isConstruct"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformElement"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformResource"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerAnalysisNoteIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerAnalysisNoteIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerAnalysisNoteIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerAnalysisNoteIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference">ContainerAnalysisNoteIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.noteInput">noteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.note">note</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.condition"></a>

```typescript
public readonly condition: ContainerAnalysisNoteIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference">ContainerAnalysisNoteIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: ContainerAnalysisNoteIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `noteInput`<sup>Optional</sup> <a name="noteInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.noteInput"></a>

```typescript
public readonly noteInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerAnalysisNoteIamMemberCondition <a name="ContainerAnalysisNoteIamMemberCondition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.Initializer"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

const containerAnalysisNoteIamMemberCondition: containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#expression ContainerAnalysisNoteIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#title ContainerAnalysisNoteIamMember#title}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#description ContainerAnalysisNoteIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#expression ContainerAnalysisNoteIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#title ContainerAnalysisNoteIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#description ContainerAnalysisNoteIamMember#description}.

---

### ContainerAnalysisNoteIamMemberConfig <a name="ContainerAnalysisNoteIamMemberConfig" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.Initializer"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

const containerAnalysisNoteIamMemberConfig: containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#member ContainerAnalysisNoteIamMember#member}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.note">note</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#note ContainerAnalysisNoteIamMember#note}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#role ContainerAnalysisNoteIamMember#role}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#id ContainerAnalysisNoteIamMember#id}. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#project ContainerAnalysisNoteIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#member ContainerAnalysisNoteIamMember#member}.

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.note"></a>

```typescript
public readonly note: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#note ContainerAnalysisNoteIamMember#note}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#role ContainerAnalysisNoteIamMember#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: ContainerAnalysisNoteIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#condition ContainerAnalysisNoteIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#id ContainerAnalysisNoteIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/container_analysis_note_iam_member#project ContainerAnalysisNoteIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerAnalysisNoteIamMemberConditionOutputReference <a name="ContainerAnalysisNoteIamMemberConditionOutputReference" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { containerAnalysisNoteIamMember } from '@cdktf/provider-google'

new containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerAnalysisNoteIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.containerAnalysisNoteIamMember.ContainerAnalysisNoteIamMemberCondition">ContainerAnalysisNoteIamMemberCondition</a>

---



