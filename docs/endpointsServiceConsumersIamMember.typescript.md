# `endpointsServiceConsumersIamMember` Submodule <a name="`endpointsServiceConsumersIamMember` Submodule" id="@cdktf/provider-google.endpointsServiceConsumersIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EndpointsServiceConsumersIamMember <a name="EndpointsServiceConsumersIamMember" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member google_endpoints_service_consumers_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

new endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember(scope: Construct, id: string, config: EndpointsServiceConsumersIamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig">EndpointsServiceConsumersIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig">EndpointsServiceConsumersIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.putCondition"></a>

```typescript
public putCondition(value: EndpointsServiceConsumersIamMemberCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EndpointsServiceConsumersIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isConstruct"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformElement"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformResource"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.generateConfigForImport"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EndpointsServiceConsumersIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EndpointsServiceConsumersIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EndpointsServiceConsumersIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EndpointsServiceConsumersIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference">EndpointsServiceConsumersIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProjectInput">consumerProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.memberInput">memberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProject">consumerProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.condition"></a>

```typescript
public readonly condition: EndpointsServiceConsumersIamMemberConditionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference">EndpointsServiceConsumersIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.conditionInput"></a>

```typescript
public readonly conditionInput: EndpointsServiceConsumersIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

---

##### `consumerProjectInput`<sup>Optional</sup> <a name="consumerProjectInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProjectInput"></a>

```typescript
public readonly consumerProjectInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberInput`<sup>Optional</sup> <a name="memberInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.memberInput"></a>

```typescript
public readonly memberInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMember.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EndpointsServiceConsumersIamMemberCondition <a name="EndpointsServiceConsumersIamMemberCondition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

const endpointsServiceConsumersIamMemberCondition: endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#expression EndpointsServiceConsumersIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.title">title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#title EndpointsServiceConsumersIamMember#title}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#description EndpointsServiceConsumersIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#expression EndpointsServiceConsumersIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#title EndpointsServiceConsumersIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#description EndpointsServiceConsumersIamMember#description}.

---

### EndpointsServiceConsumersIamMemberConfig <a name="EndpointsServiceConsumersIamMemberConfig" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

const endpointsServiceConsumersIamMemberConfig: endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.consumerProject">consumerProject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#consumer_project EndpointsServiceConsumersIamMember#consumer_project}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.member">member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#member EndpointsServiceConsumersIamMember#member}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#role EndpointsServiceConsumersIamMember#role}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#service_name EndpointsServiceConsumersIamMember#service_name}. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#id EndpointsServiceConsumersIamMember#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consumerProject`<sup>Required</sup> <a name="consumerProject" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.consumerProject"></a>

```typescript
public readonly consumerProject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#consumer_project EndpointsServiceConsumersIamMember#consumer_project}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#member EndpointsServiceConsumersIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#role EndpointsServiceConsumersIamMember#role}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#service_name EndpointsServiceConsumersIamMember#service_name}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.condition"></a>

```typescript
public readonly condition: EndpointsServiceConsumersIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#condition EndpointsServiceConsumersIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/endpoints_service_consumers_iam_member#id EndpointsServiceConsumersIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### EndpointsServiceConsumersIamMemberConditionOutputReference <a name="EndpointsServiceConsumersIamMemberConditionOutputReference" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer"></a>

```typescript
import { endpointsServiceConsumersIamMember } from '@cdktf/provider-google'

new endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EndpointsServiceConsumersIamMemberCondition;
```

- *Type:* <a href="#@cdktf/provider-google.endpointsServiceConsumersIamMember.EndpointsServiceConsumersIamMemberCondition">EndpointsServiceConsumersIamMemberCondition</a>

---



