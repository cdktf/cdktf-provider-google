# `dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule <a name="`dataGoogleCloudIdentityGroupTransitiveMemberships` Submodule" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudIdentityGroupTransitiveMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/data-sources/cloud_identity_group_transitive_memberships google_cloud_identity_group_transitive_memberships}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

new dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupTransitiveMembershipsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig">DataGoogleCloudIdentityGroupTransitiveMembershipsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig">DataGoogleCloudIdentityGroupTransitiveMembershipsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudIdentityGroupTransitiveMemberships to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudIdentityGroupTransitiveMemberships that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/data-sources/cloud_identity_group_transitive_memberships#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudIdentityGroupTransitiveMemberships to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships">memberships</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `memberships`<sup>Required</sup> <a name="memberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.memberships"></a>

```typescript
public readonly memberships: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList</a>

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMemberships.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsConfig <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsConfig" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

const dataGoogleCloudIdentityGroupTransitiveMembershipsConfig: dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group">group</a></code> | <code>string</code> | The name of the Group to get memberships from. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

The name of the Group to get memberships from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/data-sources/cloud_identity_group_transitive_memberships#group DataGoogleCloudIdentityGroupTransitiveMemberships#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

const dataGoogleCloudIdentityGroupTransitiveMembershipsMemberships: dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships = { ... }
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

const dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey: dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey = { ... }
```


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

const dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles: dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

new dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

new dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member">member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey">preferredMemberKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType">relationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles">roles</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.member"></a>

```typescript
public readonly member: string;
```

- *Type:* string

---

##### `preferredMemberKey`<sup>Required</sup> <a name="preferredMemberKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.preferredMemberKey"></a>

```typescript
public readonly preferredMemberKey: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList</a>

---

##### `relationType`<sup>Required</sup> <a name="relationType" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.relationType"></a>

```typescript
public readonly relationType: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.roles"></a>

```typescript
public readonly roles: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships">DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

new dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

new dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey</a>

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

new dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get"></a>

```typescript
public get(index: number): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference <a name="DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer"></a>

```typescript
import { dataGoogleCloudIdentityGroupTransitiveMemberships } from '@cdktf/provider-google'

new dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudIdentityGroupTransitiveMemberships.DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles">DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles</a>

---



