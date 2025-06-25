# `dataGoogleGkeHubMembership` Submodule <a name="`dataGoogleGkeHubMembership` Submodule" id="@cdktf/provider-google.dataGoogleGkeHubMembership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleGkeHubMembership <a name="DataGoogleGkeHubMembership" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership google_gke_hub_membership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

new dataGoogleGkeHubMembership.DataGoogleGkeHubMembership(scope: Construct, id: string, config: DataGoogleGkeHubMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig">DataGoogleGkeHubMembershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig">DataGoogleGkeHubMembershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleGkeHubMembership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isConstruct"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformElement"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformDataSource"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleGkeHubMembership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleGkeHubMembership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleGkeHubMembership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleGkeHubMembership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.authority">authority</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList">DataGoogleGkeHubMembershipAuthorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.endpoint">endpoint</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList">DataGoogleGkeHubMembershipEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipIdInput">membershipIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipId">membershipId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.authority"></a>

```typescript
public readonly authority: DataGoogleGkeHubMembershipAuthorityList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList">DataGoogleGkeHubMembershipAuthorityList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.endpoint"></a>

```typescript
public readonly endpoint: DataGoogleGkeHubMembershipEndpointList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList">DataGoogleGkeHubMembershipEndpointList</a>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `membershipIdInput`<sup>Optional</sup> <a name="membershipIdInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipIdInput"></a>

```typescript
public readonly membershipIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleGkeHubMembershipAuthority <a name="DataGoogleGkeHubMembershipAuthority" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

const dataGoogleGkeHubMembershipAuthority: dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority = { ... }
```


### DataGoogleGkeHubMembershipConfig <a name="DataGoogleGkeHubMembershipConfig" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

const dataGoogleGkeHubMembershipConfig: dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.location">location</a></code> | <code>string</code> | Location of the membership. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.membershipId">membershipId</a></code> | <code>string</code> | The client-provided identifier of the membership. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership#id DataGoogleGkeHubMembership#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership#project DataGoogleGkeHubMembership#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the membership. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership#location DataGoogleGkeHubMembership#location}

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The client-provided identifier of the membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership#membership_id DataGoogleGkeHubMembership#membership_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership#id DataGoogleGkeHubMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/gke_hub_membership#project DataGoogleGkeHubMembership#project}.

---

### DataGoogleGkeHubMembershipEndpoint <a name="DataGoogleGkeHubMembershipEndpoint" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

const dataGoogleGkeHubMembershipEndpoint: dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint = { ... }
```


### DataGoogleGkeHubMembershipEndpointGkeCluster <a name="DataGoogleGkeHubMembershipEndpointGkeCluster" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

const dataGoogleGkeHubMembershipEndpointGkeCluster: dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleGkeHubMembershipAuthorityList <a name="DataGoogleGkeHubMembershipAuthorityList" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

new dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.get"></a>

```typescript
public get(index: number): DataGoogleGkeHubMembershipAuthorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleGkeHubMembershipAuthorityOutputReference <a name="DataGoogleGkeHubMembershipAuthorityOutputReference" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

new dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority">DataGoogleGkeHubMembershipAuthority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleGkeHubMembershipAuthority;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipAuthority">DataGoogleGkeHubMembershipAuthority</a>

---


### DataGoogleGkeHubMembershipEndpointGkeClusterList <a name="DataGoogleGkeHubMembershipEndpointGkeClusterList" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

new dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.get"></a>

```typescript
public get(index: number): DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference <a name="DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

new dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink">resourceLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster">DataGoogleGkeHubMembershipEndpointGkeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceLink`<sup>Required</sup> <a name="resourceLink" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.resourceLink"></a>

```typescript
public readonly resourceLink: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleGkeHubMembershipEndpointGkeCluster;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeCluster">DataGoogleGkeHubMembershipEndpointGkeCluster</a>

---


### DataGoogleGkeHubMembershipEndpointList <a name="DataGoogleGkeHubMembershipEndpointList" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

new dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.get"></a>

```typescript
public get(index: number): DataGoogleGkeHubMembershipEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleGkeHubMembershipEndpointOutputReference <a name="DataGoogleGkeHubMembershipEndpointOutputReference" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer"></a>

```typescript
import { dataGoogleGkeHubMembership } from '@cdktf/provider-google'

new dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster">gkeCluster</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList">DataGoogleGkeHubMembershipEndpointGkeClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint">DataGoogleGkeHubMembershipEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gkeCluster`<sup>Required</sup> <a name="gkeCluster" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.gkeCluster"></a>

```typescript
public readonly gkeCluster: DataGoogleGkeHubMembershipEndpointGkeClusterList;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointGkeClusterList">DataGoogleGkeHubMembershipEndpointGkeClusterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleGkeHubMembershipEndpoint;
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleGkeHubMembership.DataGoogleGkeHubMembershipEndpoint">DataGoogleGkeHubMembershipEndpoint</a>

---



